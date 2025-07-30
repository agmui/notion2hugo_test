---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Classes.md"
title: "Classes"
date: "2024-11-08T18:33:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 113
toc: false
icon: ""
---

## basic class template

```cpp
class Milk {
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {

    }
    ~Milk() {} // deconstructor
    void drink(int galOfPilk) {
        printf("drinking %dL of Milk\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};

int main(){
	Ilk i;
	i.drink(1);
	
	Ilk* i = new Milk();
	i->drink(1); // arrow syntax when i is a pointer
	i->~Milk();
}
```

<details>
      <summary>What is </summary>
       `~Milk()`is a [de-constructor](https://www.geeksforgeeks.org/destructors-c/#) (its basically like `free()` in c). Unlike Java or python, C++ is not garbage collected so when we make an object we have to also manually delete it. The computer does not magically make it go away when you are done with it.
  </details>

## [Inheritance](https://www.geeksforgeeks.org/inheritance-in-c/)

```cpp
class A{
	...
};

class B: public A{
	...
};
```

### Creating objects

```cpp
int main(){
	Person* p = new Person(1,2,3); // heap allocated
	Person p2(1,2,3);      // stack allocated
}
```

```cpp
class A{
public:
	A(){
		...
	}
};
int main(){
	A a; // Note: if your constructor does not take any arguments
}
```

> Note: you will learn what stack and heap are in CSSE132 but for now we generally use stack allocated in Robomasters

Why use stack over heap?:

This is what the `new` operator calls when ever it gets used.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYB46HML%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDstAyajDIwsV9kbHY0WLmLKPMQGFBMfMWHqVxWI92lAiEAusSQlLPFlVacbEDdJsQdcfXEHzk3%2FtUQUxS3YIyG92UqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzZJDRtri5vPEWsPircA00ZeIoDpCgGFtDGlteaHR9cBttwm5kr9OCHMv766IOMhS6Xu2thxEcKhj1ZgNf8wV1sLog0%2BdAi7DZiv7KQ1f89xfQApb50myc6AagXosxU8qB5pbe9h8uB7jKorUTk8rCx2iefO31zucnxmZK03QIpl6OkiGXMKH955zFA8oVR5KT2HLQ0BpYSp4hto1CG%2FI2a2Ssx0OrfpnTcHGpFDW1g%2Ba3PJRDQad1iVlQyFrz9RZRuVBwasCdXoTyS%2BYjz5pdORSm02ZIZofNqLZQ%2BZegswmm2yEQ29n7aXsIq0lN32xFRpoK3CjqkJcztSex1DZ8a9tu10PPJPwmdbYVDHdSkDAUfzgd2JHkPTpXkPr%2Fijca2X%2BlWMhDSsv7GXbR48GqnhXiDmqueg%2BHvIN8ZbLFiaQM5N3N2GD1at12BVqqPdV1cZvhUfElhVDYmY5CBSAwG%2FisUyFKWfngWPaQMv5ogQ9OzWwkW%2FgDEERO68Kb2Rjn3aFurz8YRrUrVAVtw9WtXEWTlfIDu1UlpR%2FLShnti0vsnmVcGVTKfpmM3K2AieJDdkKZELinqIsWaPlUp9%2FEybjMNRKVFPIr5bzYwCp6KZ1%2BGWnfLeSQoUziMwU6yda%2B8kHJNX9tl7CGAMMiiqsQGOqUBL1K4VpwjQI2aWU%2BHsNwoN4voYegy8oclxwsprMtKo35cHI%2B8unuOZOS12hI9%2FMnnkl9FHgERC9THw762L31utju9b5dVTFc0Qri5uiii1EQRVS%2FMhxBZrweBiD%2BGo3oxoWH85v%2FuN5JwvmQBJPqB1F95AaYE0RGcPSwWD36Nk44abuQXTef7xK6XI86%2BPS8xIPTmUThC%2FQT%2BaTFHWPzFrM%2FIzDOz&X-Amz-Signature=ee9ee7824ccd90fec9144677411d3c783dc4d9f876b6c672cb3a3cb35529fff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Constructors

For constructors, there are 2 ways of doing it

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
		MyClass myClass;
	public:
		Person(int age, int height, int weight){
			this->age = age;
			this-> height = height;
			this->weight = weight;
			this->myClass(69);
		}
};
```

 _constructor initializer list:_

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
	public:
		Person(int age, int height, int weight):age(age),height(height),weight(weight), myClass(69)
		{
			...
		}
};
```

We generally use the second form because

## NOTE: YOU CANT CALL CONSTRUCTORS WHEN DECLARED!!!

All together

```cpp
#include <iostream>
#include <string>

using namespace std;

class Milk
{
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {
    }
    ~Milk() {}
    void drink(int galOfPilk) {
        printf("drinking %dL of PILK\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};
class Pilk : public Milk // inheritance
{
private:
    string cola;
    int numDrinks;
public:
    Pilk(string cola, int numDrinks, int milk)
        : cola(cola),
          numDrinks(numDrinks),
          Ilk(milk)
    {
        printf("pilk\n");
    }
    string getCola() {
        return cola;
    }
};

int main()
{
    Ilk *i = new Ilk(420);
    i->getMilk();
    Pilk p("coco cola", 420, 2);
    p.drink(1337);
    i->~Ilk();
}

```

## TODO: explain → arrow syntax

# Exercise:

make 2 classes:

- Car
	- string name
	- getName()
- Vehicle
	- int id
	- void drive() // prints "vroom"
