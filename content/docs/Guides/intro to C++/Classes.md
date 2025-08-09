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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVJNXGR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhT7g%2BkzKZ4c%2FmYjQxFZ4Bip2SOa6DU5Bc6S9uICorQAiEAg9hmhi13UzZbjPzuaQHJ1b%2FdAETsGPRbLKVkg7TUIxoqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAaHQOhTEBoY3PhkdCrcAwd21Yebs8v0SS%2FpYBr6Xs4lpa46GjgWCY7yfMbbX6xkTHR2Q0MCE5dGYn7sjfjBhF5%2FaUfOA4ZblcJxrlustHsmwnaeY%2F89Y02rcmhn0k056bwl8xcX8OswG%2BYhKzDVRqJYx9FHGc230Cx5ESa%2FAiNZbbIkIO8qhX2JEu8%2BJddgbWxwXZaed7Mx4ZHgUgG1bPny1qkb6B8CqITv6qOfQg3e0OqBx45OpK9wkia7VXq%2FK13ljAJKFCv3vhSbFzfdYj74cd4%2B4i1lvcPtkE30JS5m99M5YvEtxbfr44sc4fXlUtG9MBhz4fa2b7NC2zkVvwgo%2BF31OV9An0F58VWCYIL0wn1TTIgtlzHthNDr05s4FzfdmV7xuNnDNKha4At7H8dGCXcNDrwf9GTjx1V5qFvF3MNQJtJ8h0B7HV%2FlnGAJ5Xcs1EVH8YWjRciPfdMVvo4dmMqMKc1vkj19zLjjuLIH6Y8FFZ8xHUQKTEt09CJMiaJLO2cz0hLoXK0nRVCTpitU1H3kY5YKcfGQdMyJdJqsVsoxFlfx3xjSNPZP92dUaKFpfiVGelK%2BtOKZj3%2FuHe1BTmY0GkcsZWr5YlYWhCL8XY6lVNjHQwRFK1rzIwrASK7FJw1l8JVpr74xMOON3sQGOqUB42l9LLn6ZHubdyo6dCQkftqPu5a4GP0dNeCc%2FK8meFABrcgemQRGFWAQGji4HCgL%2BwElsIL04AuGh5pkWETzeUAYf43yjXHif3YwDKkEmHAmjsDnAIQ4BaFJ4k48Zs3FW%2FTsN3%2FZgryVMkyHjCDuwVN3uY2MTBJD8rNoJjt%2F6aEjw9jRsXbOGZr%2BTJhw0%2Fbst71%2Fa8IyR91aUfDiXHyL9IoHyT1y&X-Amz-Signature=39cbe5c94884c2056b09fe3232979c81fbb7bfd1705c3e09f8b124e3f0abf386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
