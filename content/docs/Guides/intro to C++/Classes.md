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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLQLRWMZ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiKca4IKTNoI27evy3kVwbEPyjOWXH4tpJ4KMbSsNjDAiEA5WeQyE6vGwdM9Xhb5iciBKkaGo6Pw5eFugHVAo%2Fisucq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDAu6p2up5vIC7R6x4CrcA%2F1qohoYlEhsQK55Nz%2BCuxmki4GjjWMWWzHETNZwROCyxmXWOBd2YtdSlxXFOF0%2Bo9fanpCBqgw7bjS7RIAqg0jD6F7Q2e4idkGqBXYAmZ6hDb8HujMxK1sKOjtkhPVLnZ0dMMi%2FSUYo1k1Gyb%2B%2Fk%2FqO74RSvzUcKryXN1keJYz0DW80A%2BFgKO1VJrLpQh%2F5gWbKjNEQlCpzEEGfFb3djzkWBYOzEyth2o3aQadpn%2Fx%2FhOsM7MfTtgYspG%2FeeHPNLyQam6eW%2Bkr%2BW2OojxFVqzFmMgX%2F5nDWtNcCT5isepdYmCc5IDRTdpedF9ycVVLXBj6tMYD74%2BtJY%2FUbIjMUpfo15rJTHP3cHOGb1kLjdePIB3PUh12P78VRVLhoGvrZLPcFsp%2BwTSaaZE5hy0G6kEaLu6qYVUdK66SeSa4W%2BZBpSlFRuAsRuCkwKkBL2ipc036kktVlI3eRFNXWkWKaQfZky3xRv2NRe7Wxlm21DEC2Rz%2FGkYxG%2B2uuAnFeGqH4A%2F5qh%2BuS1lnEFINLjaZzuWEMPNS7bHsT7UoCOP6kq5Ip7VTwGw83PjxmZMOSqBgjon2shkxsN0%2BlcrMloUGKSEMj86roQBvwCkBZS9TNkdLXnwE8p9zccH%2BUgnVgMNqR7b0GOqUB%2FHZstEHzzcKtc37V%2BHmoqDkbt3TBwZBC01O%2FzIIEQA0zUzc06SzpjZ4NwnAKwCcu0EJuQPVMRROMsUCrk39fuVZmHxQ6CBF5GD3Q4llgfmfQFyzFoeiWTRTQB2BXD4XdHkCBPgwG8hR1d63r6otQeT6%2BBgNMjNW1hjMkCEZkbrsklVMjlXwSpqNc2gE2NddE%2B6KQKwcBRy3KPqrQmTH7%2FoeRXCK4&X-Amz-Signature=c2bba15f180c4eacad17fe9e46984359879078b9d38162fada8a5a9b5af67243&X-Amz-SignedHeaders=host&x-id=GetObject)

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
