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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH3NM6O6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjs5wQU871yqu58J8%2BSpYkxujbngA9JY9ur%2BTA2tkxjwIhAKk%2FwuPbPH32SjSAJ4SPCbGKg1xWltN9o2%2Fy1h%2FRZL91Kv8DCBAQABoMNjM3NDIzMTgzODA1IgxD3GhX9rn3MRlzBeAq3ANQ86yDFb8fpmmi%2FEYLjCBuntOtk8ji2j7QnocTfw%2FesWz72SdvPymQAXlCmdxFwonUwZgY8r9s5g3zugKAHnwWIlD0x6pN4Aas1UKcrUBnHMgFmO8lhEgbg5zmQhJ8cFFYfS3BBZ3B%2BEafIF9TclJAad%2Bi%2FR41xkNw1rQOSCZa%2FkgwzYCpQMdhBnM9hfKs1J6yFh1rw%2BfEdqeFJqan502yX9qdp2XmMfV3CkNd2icfc%2FSaFSUFIfhcdiUZokeSrGKwHW50mnOslWyuuNWYUGirGW5erDEvbyJ9o%2F8JR1gooo8y%2FiNZx4BidU3439OdW5LXrENDmyiw1kljYIitCJAifh3%2Fv7KELI0iPo%2FCR0m1BsPGFFRbxDOWn1TUsHDqWfNTlhK2YvXgnhi3o0alccuZEEJV1gR%2FPJQAc9%2F23CxvbCxiM1wCTWMvxfNVhGlrm0jCcCsEGx%2FfMiO7pP8%2FC3rYVxNOjG8bSSdJ5VCZRAzmjDwmMK1MMhItjq3%2B%2BF9D%2F6ypXQj00G3J4hCEK%2FJLx2MPt5wxo2GQKrvuR%2FyH7QGyaCSGyHdW8XltJBgrMNatARZ1KiY1WkbqynPCcxHTtIPP46en4fpxRCaLZ5I4DJ5kDAFrInRYeVT92xZaUjDT77bEBjqkAW3AM92UPmAUl2y55Vo39oJKxiKtAFOAdNcdu%2F0c3%2FMvkUSu4BVYoWSDdICHmsBHIycgvGnOM5l7tj8VqZJQR3gRVVwT2RhvXuE1bA39T1TKmzesfELncUbf3GN5dvBpB1FBUfDvYeuyApotPmk7xKTjzQ%2BR22aXn%2B2uHJvcZjcXowtWzhqErQmYH6%2BPA6jujNjG2x7DwrhckCoqP3%2BPbRreD3Cb&X-Amz-Signature=0435b24a01faea18f33965ee3e910b0c076ddd253e1f07d452ef07e0bbb210dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
