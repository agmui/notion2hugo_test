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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPJIWFZO%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCDdWQ7HEmdm2cUycCfb49Z6kTs2rUs2ky7Zfxa0JbOAQIgP9%2Bg3SDgLla9okIBWBkWIuVWoBb%2FVAgmE2L43ZTbxL4qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPBu1TIrT3qEekj0SrcA46eL1h6vb5wHmkmOvhykKs4cWyi0mLsOBZBa1Gt5gKIZx7Fw5AnfAXIPs9HCc02r9hAHxYwUaLGKTrEkssJU24KC3PGmWg7%2FM%2FPF3hGamYtV%2Fs5kM2jK%2FtLr0ipCGhXJDhPgYovABUWL1d8SXtNLcGCgxlP0dXRpsPB1NS1g69Ouska%2BGqQnZ5BEFbfqpQ8pdoLf5BXz9DQK6tbQxyDXTVKaniC%2Blavp%2BF158yOeAMo7eMx%2BL4mDJ8uygoVrLrWa3Gf1ErMKd55s1%2FfWIqzNT1%2Fajdg%2B5VJL8tEQLUsD9M11n4jYOYAVkYauHDQMbwy%2FV5Y8S3wSeHLwi5kP2qNgESIYZnkw31jqmWn8yRIK2bpuc9CBHEpX72S6M%2B9d%2Fr020ZEUheQTuEPhkW1jFwT6z3PXfOeSDMhphcgRIrlx6zDYRb7uMdonLYHsJkltMK1Bi7r599%2F5Z7idHDLLmpvbdEZvzMsfseGVkXTgNOJdBDTyx%2BXAgXT%2F28IdpZZmqQZa61qTu8fiik7U88rzVGZJUaWCQeAyMmQoIuRSFtkb2fU59tcHbQM7HxwYirsgfNyW7Xv%2B1IFkcC97qul4w0ekzLqJ9dqP%2F3usGRnUMbqtQGMzhuNYsqppw4rm8CbMI%2BFqdQGOqUBhZVbO9lGlL9872tHxhMeaBXHjju2qpheaDuS6NaP2djLHx5EXs8FmiFiUxQIn%2FjC90bP5ZIhTAr2EmUbQZr0AIyxG5QQdg%2FYVI%2FVvu1aLtH2aw3L2Vq%2F9QDRTfTpi8eze%2FdTZSnR6C8VPxOfTaSsY%2F1%2FtzDEaA7mo3HaWMUmE0fvFEVID8P8my3RlM4UAteCHzUBRlY9ZtiSirOC0v2LCUofe49a&X-Amz-Signature=7e7fe33159646c6e1f1734c070094bcff77bf74546196f43a5997a83f9fa3e63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
