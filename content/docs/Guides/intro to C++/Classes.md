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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647KFCJRE%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIC1ROshzIGUJNqwIm2RhNARdBanNTPhYE9gfFUuI1MxPAiAloqu9pIy9OB04Hgs4mta5cozZ1%2F7SUz5%2Bqg3yt21bdCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMGi6bffxVkyRVT%2BRcKtwDoSx9vsbu3Jc6MHQxmUCSv9pR8nZFkaf12rXRN3dK5KvZfP0PDblRpj85iv0eokTkQ1iA1BctvtBZ9ebYsLx9nI7DA%2F%2F9RyVPnk0TbMVo68eH5h7mj4fSdTjT5iCk%2FKSRNHOti%2FRPkZR%2FxN4L1elECh%2FB0Ze3oLYKW2%2BNE39ayS4BpcxeElu9Vh1CHOswfXS4q4AE8SaAqJFKYzpr%2FmXDXiUQN%2B6oXJCeakFe9n7QDhQ4aZccOErSmFu8%2F6YrgPZB5y3WYC5EflLzkB053XGuBp4Ph4w44EunUvhLgYqxOTXDORfEjX9xczqPGsJC6Cl6my5%2F0NZll6aqmd%2FOj9CQsPij4U8hBTopkW%2B7IimCI7YDLNFUU6d4oVSQHFMOEMZpz5wRuuwyAgIA6YCT5ULK05q0ux8Bjbxz5qf0MUpv4UrW0k4Wa0jG%2Fz86DoyK05bNR8YAVG20UG2gK8rDBVd1Y7uDTkhz%2FvP0bZwuUmlk4PqARmM8DrIJcTdZ%2Fr1GewrWoNWQTS1PcBX77OLlJGQLAioeLtyATEQWmbJ4k%2FDg5OCtskMWCKXrt35OzjNpaf%2FFOUDpSI9vC7jkEsxtoEg0DrVW6BUfa6cNq%2BE9RXsl6K0tomqotDUL%2Fgw7FA4w6Nf%2BxAY6pgHKxd1RTcJclhqancqSvfgxGvRIjOBcxlc6hZyh8%2FBiTpLGCzKLjXqD56y3l11n%2FSJBR1u2KdDp1C16RfzcgcgFFveYfauL%2Bw07mvWuXneBqDMnJ9x1KrKjAPZ4FxDiafjQhRZix2ow6NhA2%2BCY%2FQgvldG%2FW0kw%2BSOVJ1eaQBbQBBk3wCxbQDQqlSYE8jEWWrhoBsy%2BgIYCOTs6jh%2Fn%2FMM1obKPYEkF&X-Amz-Signature=3331f05344ea42f197fc2f6ef9a0477507f161fcc4d0ff6f1e3f80313fa768eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
