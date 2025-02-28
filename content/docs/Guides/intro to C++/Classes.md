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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHGQFGOB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCLHj2EmOsrabRqwc9EaeQc2ENPkxP1aU4qap5q%2FAGtkgIgD2AViJiJ5sPtdEHh5%2FOkjzzrBAFy0IzxWLIMuVpN%2F3sqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcF5E402TXkjJ24DircA7gHJC2fcFvOzbGZSrAgSRUXIL%2B2ErmkDfp74mggbKz61Tf0X7MoigKlWMiwkm8kk9epOAbEnFerSWf8iTHyuqct3JrJ0yYQ9i2ZZm1NdCAeoYngOYcnX7Sd%2Fq%2B7rxJWPKrrGhnrhs3SYSbkPXB81qZiFzWq4D5FUFXjEBNn78%2FhG37vhASaWFUmMabmRhE4GPV5gRZ%2Bi5iaNlTMFjqPY%2F%2Fq0u4PltjU%2Bl9MfQAuouY6WFnDSXcIxZJkvNG8p1n4i4CIqPyP5cVaCnYtIvt9VEXRNh%2F3GGoyGZQ%2BK0I7S3Sy2w%2BlrdXIGUplARe8bnxQQtK6FML3rP5f8ple0BILd%2FXNwlKUhlpv48nM1WgfL7VLMUrvyQpydHnMMM55gyaqLwIyhuyrODsrSvCHAO%2B%2FfIZfikZ8rQQ6SlmrzdaCQByriSqGifadSLVlc39OQMbJhohL6vLCzEgY%2FmwSBvm%2FwzMG%2BeUWbZNqchGMJSdjUzBvVmqnDWQbGW%2FhpFCpdoxPq%2F94bYXKAZTCM1ZBZz%2BhQO1Hk7Llcb7JdtZwtt1enUH%2BVyaFQCj71PRS55xNDdi%2Bm0p2URCbms%2Biarau5Ri%2FLN5goibkqUn19k%2FnuwevYc8StkgfDmEDks%2BhiSU%2FMPzRhL4GOqUBvjT%2FEddzpWRBnKlw%2FaCoXlOEyXMRIfDWAY0a2i2wX4RxmQvLbeUPK3e47%2BDseqWvqssk3YMqnoyXHMKapzFAtXxrtG7KWFaNAtX%2BTrFsg27f9GLCIM4AQ5ly9R5aw7iX%2BFRTjGRMsnm39RXkaa29glYM9vaJJ0%2F4WJGeqCy7YH7hkw5hq9FOviu3nr25ieSRIMupTococ%2B2n6YZOva8e0w5g%2B2D%2F&X-Amz-Signature=dc7677257dff40e63ef89d010701518ea63cdaf32c95ce1966e5d2bff2e27cc3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
