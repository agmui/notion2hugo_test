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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTIEEQSA%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIEur7Yy8Jo6m%2Fkq6wscsMwE5jrBrMAEy1OV%2BdTd3JRjZAiAuiQaGOakj43OR2ErXarqJ5i7D6ZSd3MxQxEbQGiTp9SqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ64%2B9BJOk7xMzSJKKtwDotKLLY7TAekbGYvLSN%2BVa3tBxrKoXsW53QgDzgF6cXLxp8QzCGrvTKYbzNURiSUn47uHt88PKme2jHpmfsXCMYzmMayzyVHtA7Sxpl0Kx3MJlO64Kaz0LB%2ByStXQKwQLqt8SL1O8sapuPaQH7sUR0ynfqEWEPBjqhEGbfilvMbu68ShvgA6xTuQsd3wEocBI4Emo6ndY74FDk8R7mn0XuyQ7%2FnHM7UrCZJnOKCUXwivJAnDrXUsnIKWJlQZymiLCDCyhc7J4srQn%2FBzS5LnuQEQRNPJBLEhL0f4jKE2ZnDuzPXbbqNyn%2Bs2JYDSoTyszf2KpLMX%2FoIgzQUBB1AR5g9iRab0urViVzDaVhg8dEWw2CLbaGg5Z5jdj%2F4lPMEnTYYhpnlZI1CKBzyhAxIoafGMT1QU2wAoKdNu1LemMefrJAMR6c5Burr43VwbLJgPNkC3TnhjTq%2FG7fYvTC%2FCf1KAq1EOv99R47i4y9sdaEXiP6BhSdepsk8KiFr3i808qO5ajR0V6oBt2zUM8iD0FJ2ISLUN0EfpVoDrl1V0Rcs91rIJxrR0jD5Tpvyk51yPODMnFwdbUpHaY9oOlTT2k1DXTF1KYKGivqZOQUUQENf1ILBc08h59tXEpWdAwpKWrwgY6pgGwybzVfYNzBzqdKxCsievaon5NKShegXqyVSx1mp%2F1QzBBVSJwGN5J0kisy6De76hKMi8%2B7rKVBUZUMiIQPm96d0nXDLaxyYtuSnIYn5w0maA6JX13IE%2BDxtZtGptjevmpzilarWJn5Ejiwz64BPqbLSMi7SE45SWr5VmWHpCF2Qjd4E4nMpG%2F%2ByoLFCooCagsAcw14emQDXdaaDRMrZjQs4C9SbWM&X-Amz-Signature=96a57d9109d4af80f9ec3674d2affb2e1bdc2eaf33aad8aad70d368dd52ff355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
