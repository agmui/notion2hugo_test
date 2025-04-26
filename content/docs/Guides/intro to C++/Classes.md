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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS2UMHW4%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T131529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfk%2BD3B2Cxrw3Ck05n46uYHhPsmRq7tuoVgTH2Kp%2FFiAiEA8Sgu6%2FhA2kXFJYNmJ4twf6e4JsYuVWS6KUj0OGVqxzEq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDK1fDLGui2gN73hDXCrcA5dF2%2F4UvRs6qq3cElGzFL6bVmHjHej%2BxifI9kUwRY%2FK5BPaYiq%2FGwAbcq0282UyB2ghmzBlXwVm8yXGgCd1k9sAsd4ktV5ga9DFNlYJtxOz8DGq1%2F5Al%2B96m6xlqFbBgnxjspdNLAEoRmkpuxxgZvrs8HfweM%2FpJA3KojR5I1c31FBctRimz2CBS6eseOdVh%2F0EAGXUOZo0lSQeT83fWhHvxqNivBb1lUYRiC%2Bk0PX3xqSNvMClH629rzhG3zkg6ScRK4siE2o0dU%2Fa2n3QtfMgD3NnmxxU5D4v62SJVfo64FVqgRCvAyE4tLq%2Fo%2F%2BH7pFzoAWTutabtzlvMqOEI0QixTTdMl0O3QQ9PLzRkZcKkDtUJIqJHkPbVQJQHjkw7TVBlftBwZdokmDWWBwDSszA38VywKeCHQ9mz2UEYgmp7TtUFAhtDPpnnCmD6JW88s0JReN9essETX7oq0jX2ytp48d0C%2FFJopSBKfIk2leZjG1aME8JVnGlkFkyd0QmagNusl7HD%2B7V6vaFkLSiU1XI3Kb6Z%2BKzCg%2BXhrxi2gsUgn2N2Yfp9anrnGq%2FoWy2J5ZTQsP0zdAbV5ui8CY2ZcYbBGWmfw%2F%2BBsV%2FUYZ7UnvjBDxijG7GoDRVQzrtMMvSssAGOqUBIIinDq1yaFPzs7USnCuPT2TxiFlBTAYIJbX8EC2WYWThX5BvvOyKVXxk%2Bkq88YGgDfSVTpc5hMHCt5iD%2BisobQ6waA8JCtNSCIvT%2BfyNI6shcQHqPLf91vyKM%2F0W7VvJCSWIWiX7V4mpYzUGua8COyTe8FxbBBf9s7HxR6Le1Z%2Fo140qaRGeSqYUIWG71RMYyvapIcbQ0pBV7mabGRBqTBLeB7j2&X-Amz-Signature=0c4aec6f22fe3c03e9a465b4b21076c968330f1e9dbe1a5982d7197ada4db0e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
