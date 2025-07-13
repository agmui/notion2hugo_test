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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDKGIIES%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGeSBdt0uv0GVlUADj5rWN2xLYMOUmoOhIF5QhHCWK6AiARzb6dRPmTKfC%2Fx3KuYggOPz6i5G6jXj96sELrWKfVDCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMGSBlRX5bAICiCSw1KtwDoXOTRfSKSx1lj5yc47dDzVp45x2KC48z%2Fp5F2MhslO%2BV8opB1ePk2YtcEKAsHgC77HU1HlSqzmexWyG67atJT8dDqsNnF%2BQS7kibKwH7dt%2Berna2kLHpp55XfIChCR%2BFbI9umLt21lXLHzjnaYLu2ZMV0xyPvg29uCfbu19eQlpIaUamYLS0c1Inn43cpT9H1F46Yo4lXX6wr50AwWFk8cpkS%2BSLuHxK4cOh3ak2%2BIn0gHxDdZJLDBOWz5B9UU9CP5DBsvFXA1cuKwQUCivmsPAm%2Fw%2BdLM0DijYJU2VTOAn25kCr1c4KDlDO3OhvWZVszejccU7MgTtm9zyuU3Yjr0AzbZZgwKkBZYR02SdoHhB3pyF%2B30rI29QcGLlx%2F2spJ%2BBYegKMVUIffYp1rGuV7RhAgUy0lfbXxwJxbGxd7AYN1Iivez9uRwLYD5NmpcUHT2AU%2BmA%2Bbz1LTt%2BNGOKiwjj78l2DCjOzKKhlFH9UTo%2FtBwyFZ0ZxtakzfzX0kzu3qDULnkXOFmiFA7RU51feXFdEa1ZMFVyAUojWsrwWGmv0cba2mSeW6azFIm0AO1MZhTb%2Beb6Ex9b4NStQGNwIm9qEStp0ZWRIxDh%2Bcs7Bjr4%2FEe7onW9ectTAc3owkJbPwwY6pgHoSEg4mmw%2BYJvZKbyGTbq7N54y%2FciQgYFwpXvLKvEzZG0rtf1uikgVDnqbPvm14Jmp5YwWIguGgFCHH8zJXAuLqmt6XlZT36L8%2BCQoF9DB86VdnY1DzvxgyCP20pIusENVyFUOadd7uPQ1eS3BLCnISbZDuTbR7N8aiVmkzy3ufkKwNj7AV71hyaKq1FqaWsEA683WubKJNDulQhx2LDK6mkQt6Xj%2F&X-Amz-Signature=46c708d04618081d207192ca135c17bdadf5b0c72ba79644a65f1a9204a67d3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
