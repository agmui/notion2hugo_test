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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIREYX3X%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCpJSMRxj35beXe%2BdUAU%2FxHjXU9mg6C2pk%2FUTaLMYumVgIhAN63U4CFdLrS284SvQz3UT%2FcB1rooTlPRrAQ7EVAGPqwKv8DCHsQABoMNjM3NDIzMTgzODA1IgzU3dtQ56R90zPI93Qq3AM0DcpXwQaM6kZZ%2BbSWCdurCxHg9WzUPwGAqPVLc75mwrHo2JDdvtuhETLcBFKVkZTfsClQSRywk1tuamqUbYQFICKgfrrs8c2usJecS4RoJh9Hj0MAUh2XLZ8JG2X6k0ZSWlpgYZaShucFMKwUk8LGk82TXRrk%2Btu%2B1JQkA%2BR92fhw2OOkVRaU%2FbvcHDAWRcvNQB7KEC8xcn5GQmhksqs%2FG8A1fyEneH%2F3mXcW9GvmbiDkf%2BO4%2BL9ssvpCjz%2BMAic1JiQ3CDHF8F67Wq%2BVIfdj1sEbVmsoFnTbqfW6mI2IedQqJ0bfd6hyyeBKMd%2Fpk7nuMHlzR%2BceOsyk3mymrVm57y926QL416i82bjqKzHaXRhS8zt6N2f3H8o9YAFWe3KA1t5YECGecWqbVr6W6YU29bKKCVhdUAorjwM%2Fz0S9e7nWu2iNaCuQkHT59tWOBn1v%2FyHX2wPKFjej4M%2FZ5m1Nxzel0fb%2BNRIF1nhlv1Rbh5Jo1BeC0wGbJYxwri8JgNyo6%2FkfsHKwGemLUnTqefiV1ech2k55FUnxVMPuvxxx8ChsoPHQZiGEy2f%2Fv5QfvPVJd44YqYv%2FPxulF7YcQNOK6YhAHb%2Fh4402yCHi9eDJ5r3duezbL6P%2BjhI%2BDDCJl7DDBjqkARZAlmSg5mT8R44vF%2FHcrpFKaGCvTJaKh3D1V8fYWiBbZpa7c4Ldjk1jROdNIRcAYCD%2FhbGtbYbtIF1ocD%2BfOZO2TNGGnWpFg58OrWCuDploOWmc0C7jqlIGNlJ6XRUZezxg4orjQ%2FtbyZIoJVTvn23dl2JYmM15OQixTX0AvMnanxa7kxiTFTD54quy3b56gBSeacvxGo3AsUD7DBPQb7a49C%2Ft&X-Amz-Signature=3008e36695233db40a7f7167f7a437d69ed4647d2b956d75ad543206e9f07721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
