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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7MBO7SB%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIC6xVJ0Eme5o%2FPgnOjqbghY6JxvbT5VfGwDqL4QDTO3zAiBgM5O7Y%2BFj%2Bs7nq2fw8%2BF0GQ88HD6qmrPqWsBce6DyLCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtfVogBaJG%2BbaRKoFKtwDuuogOBuPN%2BlBSJSI%2Biroj3yHL6R0%2BC6uftVvxtc9tMVjVHeujHwGd5vYACjnrKtb4MCc7n9Y%2B0Iu01G%2FBugOVA5OOxImiM1hieWv1aArVMyA7%2B3pI1rd2dcupv2%2FivkzDBEC3rV5h14Pz9iRoHyndMNQbkdseHkt3rNXcWlQWBB5TlGM%2BTbZVySIh8mR%2FqFqrBBeblG24u%2FyT5XpoHA92lq8ixqWEE%2Bg0IeblOqstjZKcIMff%2B9Pd1CgVMtG6zBpFEN6V%2BRKIZw0Mw%2BzNwWXtD7PcwjrcWHlbJMxYVkyTJBB7W62ImHY0L9dEY%2BDK%2Fb4%2BYTOHjArLxuip6Gyl8oxTiBiC3DNpgowG5slJ5Dib1TZa5AcHg9rJrglO%2F9bCEv377oA%2BZjdql95TBqX3TH%2F0zLxhLXCA9eGJt7BZpnuhu%2FCgeJVydtyS386FwXc76Gc74I3Ch6JnCw2Wj8KXf4VH9uecnUXrBWMR9ss6LW%2BCWFUS%2BgoeWuwiPbMj5YE5YB8opyF%2B65WS6kKRVRJbsPjlP9m%2Bj6u6xHRW%2FMzXChrGYPhLyab9QLU%2FQArkut6oDUI5Fd87L%2FXaDOGcw%2BLNUo9eJPi4%2Fa0gnWpW85rjReHCTA%2BthwK5aw0CXBX%2BOAw487MwAY6pgERBNeoLbXp6JDlLeok4kjuA5KKsb2gTb60TMHUg9bk2zHeD8Vz4jF7HJVJzIghyawTut1ARfBGLo%2FRhTdIBA9%2BFypypguXeAAYgO5Fm25h1z3%2Bl0j1XM%2Fe%2Bj%2FJV%2F6R1YDtXHays%2BEWK61Hut0Ff8apFtF%2FJIqUmuL3eGc0WFSv2V3N2enhJdB5AsaG7QjvOZH3kXI%2BLRlWq6E23dtbqLJEv7VhFAiK&X-Amz-Signature=3ff23aa1313055afe64499f3c340ba41c5965a18c22ea24eb088a60ed0afdf55&X-Amz-SignedHeaders=host&x-id=GetObject)

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
