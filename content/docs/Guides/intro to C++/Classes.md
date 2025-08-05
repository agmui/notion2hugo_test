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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG347V3L%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIBEFWzJydWfY5MdKhURYK8CdJBxAfT2k1tHtc0%2BcZVtMAiEAnyOlILPXMUr%2BULLuR34gtfqqtuW34vW7v9lGZwcbQ2Qq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDHz4LABWwdfBAI3mCircA6US0J09i25erRrW%2FAmpGn7V9iOo54D1E61AUhjAa6nsgw9msNYi5UuOLMU%2FKNlbKLIJgw%2FV%2FTcLa9csVA2zxfc5rM3EjDO1PVduKCTHaWs%2FkEaJ84%2F4Cp5jNNvdSATt9SFgdF6ob%2B4mbU9wyadKC1A5HY1vAtrkMZ7KIPkQHPXI3QX%2FKetb3lSDN6zLfsTRs7OhJkXBS5A5X7QfcqmwUhRIQ%2BArMnSJF38%2B6c9CQVqemE7cGgr3zKElInH3U7IO2s3BeBdTJf2hPzy550J54LpCDiKSy0OY7GJwByhtfF%2FksCQUzpf%2F2ctW1nSc8FqnZvevOC%2F6LeDeEYgzglXnUuyQQIhPSNcOSbcFXYgGXTAMtNGEu3O%2FN25x6P46PntGllnec6CRfC8GOiX3R1bccBA9fUwufZ51gQZosJe64xbCnlgq1UzQys6CRuSXfolRjSRNL%2FBw%2BgifolPbsMMfxZb0yQZwSOsyB55BgfTebRecUaxk23RUnQpcDiUlUxsF9MlLHvVDLe1IhT5zz8aKGqD%2F7fnTrJmQAPDXZid6TItCQ5N%2BGlpYSrroBQNMZtdlo81N1hQNHaCjFP2tXrGRqtAtlhhjTwmH7JkeAAeYDLFolXnmoQTY3o6GV8lJMO30xMQGOqUBcduWWulRtVpVL%2BqcMMbF7Tnsez8b5mZOYlKpo9lguSw1KhZoi6DPBshOPvZVoXFia7sDmxQCk3erJHItBY4BXoiiBD4x8feYMTSraBrXrU4%2B73Yz%2BFRI96UOHDG16gNxhLPCP04pDIanScv1MWYUTNJH%2Fpj85QOFIrVY43ZdwwAswL6r6RYhjJzY5R0txFBmEaBlVqcg7xS8Uu5h8Z8bPwcJRQc6&X-Amz-Signature=e1d2b3884965b43370195b5263f530f1478044df8b478b7db8a3af2703291630&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
