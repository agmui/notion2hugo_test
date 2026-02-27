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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBKGESRV%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDRKIeXrhlvoFOrMch4U%2FP%2FqvuEagItGnqO47h2ilB3UAiAEMgMI3rHZenUKVTLFbPrFH4JRldSZsftQWdAygM5A0Sr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM9mjieMXUCdddY7sIKtwDn11pRNZPZReUJpxFj4QTxc3nnbGo958bkA2TSiEp0cPZFSpixQ28dB08nt%2BQB%2Fh0o2FVgWlRSAtLfm6WCHJXTjiW3PR%2FsrtVgT1scwfEKBGar6RivkvlJy7w%2BqAQo%2FX3cqyd0iL8fi8Wtc6%2BKz%2B1EEEZVzmrvHGz2tGYQLkEfrnD6w8CObGzFNQGh4Ylrp%2B0nG1Nl%2FsOCnkAaSGRHj%2BUjW6rOKWvqubqzIarUlqdmyOt53tEGdhpbPjsYR67HDXhilJ4ZQLHfJV%2FmRdmRH0QLGHOm%2BuRVhle0uGUQCY4MM0uix2uwvjSUVyGax%2FhtTpWE%2FSCwsjXajA0MieelvFMaw4PBf1Ef9V0QnAePXuX%2B0u2%2FWFk0t9b0Fwsty7gU8UdhvYCo%2B81rLwxNYaFuSDQZRk9WZnN8i5xyrTZNoDIl9g1WfU1ujFTAhuCrTkPMfh5IhLEmf6plSjsXqwbMPvFZXeL6AXFXkPLhlJjtmrDAZuKlt0ZFNNwfceSLzG8MjdJOw7mWbg3Osidip6IgGPywDYiM5T75vf2%2BWJgqyNFt%2FA7K5iHpLaGRb%2FAMYghVt0oqzYS8wqz4K0Umrnp55GxjGOPeIwcf%2FriKYCIFuWXuyOmctspzglYaS4xwgQw4NqDzQY6pgG9On4dgnPl7%2FgIKkyfCUYcdnyCRKYl882X%2F8%2BImGIAs6Z5GL9JrADTrrTV%2BiOOWGqr2ze25%2FO6lcy0BIwMkuTPaClPiiEpaabAfk5ALlDDhp33%2Ft4diwhPSyNAyLYDQc2nGKOfC0Huo%2FOb%2BFobrQhVZkSYBof4lh8dGAv5j6kbwyr7%2F0f5BKXp9i0avI9QlqkVfiYfaxP8Hb7%2BiCzpVYT8tluI3JdX&X-Amz-Signature=7aed00fc341f0378158e91a9e5dc2dc569c60eb521ecd4c8025df0526a589247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
