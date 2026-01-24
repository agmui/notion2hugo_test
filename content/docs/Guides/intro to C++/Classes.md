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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XQIJBZM%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCViGIBOFZXIOkgkihdC8lqIJVmSVca2b4tQJYzg%2FDuoAIgQr3vKN%2Bx3rJvp93Xjt9Lp861ntW%2FOYTxR8KJxDlsPmoq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDMQQf1Dk8oSbEi3WxCrcA36RVALEHlq2T7uU9cMT53cOx4wsZyXGjbIsIwB%2BEz2JQgSwD%2B3B1aCPlF5stGxn64BIwdERViBpVSI%2Fcv5nADWyJP8wV0QjOU8Qna231Ed1k6uqD%2BuuzVMUNZIQ%2F590vO7oJXhtGnevyR2SuTb9frl4FWJvWx%2BQ5AuCRvLK1u5DEKTyC%2FUMbaN2QT1AqKVIXj2dBdsega6oJKmzROMAHitMG2%2Bvx7wIbdFqyRDbcEF5A3P7U0UVlrbJU%2Bi8fKnP5MGDrQ%2BLpArXCQa4h8QD4ytSn%2FLZrPe7rd54uB8DUZaH2gxRQ1oO%2Fdl9Mr2f8MnEwivN1axKJZiAzUdGOnCMvbHw%2Bb1OwdmHlLfIGBUAGpKHN5xbb39VPS8C4Z7e3Nqeaw2BVopdPm2aubIW2jm7wVHHE5HvblXD%2BxVrQGy3OsRrfvxV3uC3kDaHjvFqj6m%2BHcGfJmI%2FHdd45XMbUMnIwrLWfddQo9WS7hg0dIEomLOHwrAqCvMBRTMYjL9dyoDgXi%2B%2BxtVP7%2B4sek8h2RZcbZXHANt0vYWs%2BvEo%2FFCrK3LzvsJeTSniNauArFK%2FYqHqJXOSR3LMHJQ4ZsGUTjcl7mydonaGAzMn8qq8OuBLIQEzM4t5Swsj%2Bi4LgqpdMPKr0MsGOqUB7i0zq2yu1DCCM2UHCwg8%2Fu3yyzgutSIrYMIC7WFSqclltOc0YLndLk85v8MVmEEUOwQHflEBnAKVEFqBhMh%2B7S8ncyrz2fMPtrJb1c7A9HHt3mdtkXExBWNf6QC7NWtkwZ7d2yU3PkIUduhPzS%2FoMpk%2F%2FtfttHUclcfXyEMu3xTYvbDxZUJ3dcrh4p9t9VJZwXe3MG12JraMVKW0E7ALNjwx%2BarM&X-Amz-Signature=dda50750c075b7b8717a956a49c22c5e7acaeb36e2130824085240d7d52bef99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
