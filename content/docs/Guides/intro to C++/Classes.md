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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TBUK746%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCZrdNx6QBAqO8LN62f06OmbO4toQ2WPRKsDVany2ypWgIgUWuBhAYbEGh%2FEWVyU8wTfTaTIHGLa1UWsj65j1Gm8gUqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmkMuCFbgpz4jxINircAxuyEUb%2Bk2kgTWgA4JqXhCZsqUwf3eNM%2BqecxqP2ptSVuKdIPV4Og6OM86GQg%2BXW4HN6XRLVGlDcZx%2FwU2umP%2B6R%2BeYXffvwMIx67dNX8ZorTfjtmcIBkgou7QNPs2X5n1r65HAPQkTB%2B7tmaq9McQvm0z4d9huUV3guDkjI5eW13TI948rm244VJUaX2jLgg4LFuRvdbRUxWOfIzh7Do5T7dMeBMQJCHW3F%2BY0HneV0GsAIbeHB2NntMIT0%2F3FNizRjWI%2Fm2SP0AB%2Fo0kgbthq4cDUXdtmH9zs2LZMbW7mZlM%2F7vm8c1xAd8KyrnKER6JdJx5GoTz0JGdDfZmjwKvdqACX3OQ8n4HlgcGmswfqGY1TIRryPGPj1afwiMUWzfQmb%2B%2FaDCDhyq%2FQwn9df%2FSM2CHhWyDKvh2EFrc4lLyua9UpBVcN6h8Yvu2UiGUShh8kKRfkfFIqGvzZ2J3NeLNA1VDKy3F%2FYu%2Bau3ZUFkrq9XoliuhSINfE%2BYah1INwFDht5s%2B2oUERPt7KhpvCFaFLHYB6mv7tQxs%2BZrkbMM7YhOqSpoW0qkqFvEGGfzqF8ESYH%2Bpptu%2FmfJBMTdrPvm6cubQrxxhml%2F3YHLl1H%2B98tgao%2F7J33vYrVHxZIMJb7u8EGOqUBTIghwfW28EqfIB7Wxc97DJCpSqkSaoTgv7rgD4uoGCU30fpCT1MDXO9vlhMb7eJM2b3FT4%2BqT7qsFi3Dv7AOEnvJZfmsMNP2iYFWxJ%2FtBWz0TfXhIQGguom4VM7%2FAGGhRIPk8ATdSa5RvYz3bViRtCuBvKZhK0IXjXJEcHxuJeAsgpxhsoajKuofWYmPSIH8AWEizT%2BTyt4cJei0dZx%2F%2FdqNQS1B&X-Amz-Signature=3377697cef8319759ba3760e8348d48ad12d3609d79554d396623b43c336d413&X-Amz-SignedHeaders=host&x-id=GetObject)

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
