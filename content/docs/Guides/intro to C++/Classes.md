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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWYYBD6O%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNwRyxOlbotPwpNfRVpygWGelfuLV%2BF0WV9aDEMwvnvwIhAOQvdrYpY%2Bt%2BgoERYsDUB8xq8JrRaLRqsuyo9wL%2F5BHjKv8DCFYQABoMNjM3NDIzMTgzODA1Igw97A97qEoYopyYAbwq3ANeCewpWsno%2FyqkpJtKRvac2yqpOWOkhAm4U0t5NchWunnrB1RPjv4UJ4unXW115T%2F6dN61sqARLS9aP%2FsPTOPs1%2FXA%2B%2BoPruW%2FmtW7KBl9qq36gX79GUzU3nZGtEj9HZ9gpI4x2WGcjyS970owGFPbjXOEnHTkaFC4lYi4gJjSWUwZPUAMj3tZaKbP7NDNY8%2Fke2nchqUV2irytH%2BO2cLeI2PgVkVi9Tjk1jIHJZFd9oOYOcF9kOxerhutYrwhl2GV6vcu5PlcP57VcL6LpiVjqYcEa96cBQhKoOhciVPU3vGRf0AjL5sU4Ly3LWv3XWOi2e753MqRgUfiM0b3E4dcDvu%2B5%2F3t4EVWXCqowwLS3emRzeBpTCzcEX23JG6VIg1O%2BjA0%2FXFMTssb8hcDTtZ2C9i0G3%2Bx3lld4iqFOef05yBwlpzde5s%2BmyhB7f%2BDzd7HLETspiTfXUgPuhZ%2Fg%2Fa4WjstCOj0y53yF68gt0OYEYMev%2Fb0Woh1dQlupyxX6iqAOBH8WsT9MY7ms1LL9j%2FsIk4HY4Dz6pw8MSqC0MQO45pbgDjDX3tXJBF3hIeLF1TJlayCe%2FRFoVhhBb8zsAKAYpjEjbT5KZ8t1AoJT1me9D4oHpgsBzf7CjiBTTDeq6DBBjqkAe5A9jMgUIxs8KSHhfdOXGjAhvfs58%2BzaQpCdqw%2B4sx%2Fg95X6pyjSRrlTK7WLowgYq1pro0niHbOq4DDDhSqVe0tRiQojs6cxE5CMBvUbLdtoTCKnnzoasE15HXxXrmBnIQboj3%2FNOkZ98LdTzDMyyjZgf92GgZr9V5BbEd6CeSFtu9MNr47h6azh4g1rWd%2F91VnH3Ka56TgiinTBK2vObYpy1XO&X-Amz-Signature=8c5238d448310bd4b8d1e8f94983c5724af817ef2955a3666587b31d13fd520f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
