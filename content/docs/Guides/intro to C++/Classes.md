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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T57DIJ4%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDOM9TfAGUmjVUJgJW3svgWDm%2B9oBQ4jIpJ6CYLwxdYAiA1Wq5k5NeFLI2giXQho6RR8CVV30rPV5w4DLK24oAIiSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9dhi0XWn4xQBngseKtwDcx6y6Gf4NRyEn7p065ZsdSsKaF138Fc92lBj5V1%2FDBsjxxTXvUlJrdTZkxZrP9JB3zhkEogcm8xnqEcMThE%2B2rbfNSl2Vgr56tu5bgDHJZYIkD4tR7Ay%2F1oNUgFlNGoVribMwbDlpfrXaW%2F9J%2BTBMH99vVIioRdkOfae54hsH5fttNmwdjwll1y4immat0EtRmchDhbLh3LkNK4a2jnEot6ulOx3CU7LGdLxJvoT%2FoLNaybHQJcxhuJH4BvBExQadZXJJpu70QToifqK7qnRz8wuLyluYfii6u%2BcDGBAS61OQu3ytgUOB9cqXztynuL%2BJp6ta0DFI3sLx1NkMSfMkvLDdDhr6MLXcEqOdKi5bReQ2ZtmPEKWr6gAiO9oPdWXmEbqwiI63mWXMTNbI5fBziQc8bkMFi%2BXwQcpYeDc3UgJCqt1gbZznr9qc0HBk9WmWoscu%2BWEQ0vOyAdwTLAwRY%2BDEljSEbBOsKpaWNy6aWlkUZg8d4bgtfSPZz4hYBEngHUq81JfdpOsiYqNaFdqJ0KOICt9jCoxf5QhyeJJWW4ObwWbjwL21vpYKOAqPrISoinP8zWm4Cs7UPbxbMI6kVABsNEoLxjFJZQl0qwqYVi7Kn1uv7ubpD%2BKpEYwiNPMygY6pgFm%2BlJxiist8EccQaEPCUb5S%2FT0JDast1%2FSR7S4KumqGUI3G4A75zd6pgbwrjEXU115n6HnlIW97YG4AOcjQVgUZJwudoVAmiDUuqsBWeByfx2d4%2F12fPqNBwX%2F58OY8Kv0fUYKcaT%2FcddL8Z1zsc6a2JJ9Ut879vZ3B3X9NXZR%2FrKJYHwGFFOqmGDqMyzZBDqRUNqz14S6siyDBz3K274%2FsXCh5q4u&X-Amz-Signature=3ad21be5bf7acfc217f17e90a411ad24dc0a01e61e599d30711ae23944895b58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
