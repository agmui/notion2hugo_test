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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNDTXKSB%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T090740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHqwHaupE4LEUEsrkhThnd1CYs39ZU2PVQBMWO0B1R%2BtAiADYtzNj9kAzbJPl8AqaFED3428JcuJW4kMgfIpihabYyqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMItzVGzNWxLMFm%2FNZKtwDXjxm4aTpPdk%2FDRyJgHVwsg6hN7serqEigDDSi6q4uKBvQXjRp64Y8coC%2FUwaVuqIzQec6xpSgfePTy%2BMxXc%2Fll%2Fq7%2FkrT3xmqDSddeg8u3BW9GCFuJF3%2BzSGEoZGzGozTYKsBgrgA1zwMnRpUtP1TGI2d%2BsMS5hrlQGdPGc4ryMG07zT5cB%2FCGe5k72sUDRxjoIiKw3uYnMxjYe9OahCRWRYu98xY5C4Ue1ADcVZUbywvLt16uNATYasd11g0mYAuHjchXafH9Z5oEzoW3PZmkR4XTccworFW7wlWINzfK63BvXZ9qEVY5PmBCNFeHjY%2BjIyuCWHa28F%2Bkp3DHY0%2Flb8d1JtASbDiYnLR0qfEQmfTF8PGoCpfAS1z%2BvMkC8ZJ7y6zgbSS90w4lUvxkM2XJdyBFrm6hoY1AVEZLPKAUzwfqXRcEkbYGfsKSOJUntBis281Z2Eza0df8eFmsCtBPN9T3SVN1mtcn97M6h1U90FFzE35L12LLW9%2FDoWBnGhy9bpG4Wlu0HtjaOYTnb%2FAWAY08AqFZ1FtIDjfwfGsrN8xzgNBt4p%2BCzPRd5xeKY0GJRGwqhmPLswv8APhItQcyfuRDyjP1QV92GEsX6NjZJkcIG2ZFbyazIhOAQw0KDXwAY6pgFQijkqSYuysnuKgssjxwzQwEozcRVEKW01V0DnrGkAkiEHLV2aCU4T7RQJ2nyN6PL4kRrZwOj7XRk6%2BH52gzdVBSQECn2M%2Ffx7ojOaqIT3YbAwZgYiJ7kBhzurPkzwYJ%2BZpADE727TZfn2R0A98XftDQLDLkdo1Albue9RIZLYcslQWtKxo0tt2zShs9GjalmtlO4N7g9yaYzsPzVpHZXgC8SL9esy&X-Amz-Signature=164a5f29ddafa3c7fd422ca7627dd39226cd82d59a770bf155241a7cabb01978&X-Amz-SignedHeaders=host&x-id=GetObject)

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
