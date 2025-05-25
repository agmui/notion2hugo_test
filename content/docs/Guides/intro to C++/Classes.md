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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5YQ2FHO%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T170150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCCtluTW3NoiGsImSVMGroCUS0hn3YxwGgMfZLY7NM3SwIgPcXeOh9fTFHtc48P8v48qPSejQJlgCqPz6RNN%2BbCXaoq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDNqEYvuUI67EEfECyCrcA3GdYx97QkeqRjAdeEWNTlcxNW23SFXduhuLZ%2BKV5T%2BLQVVLCq96vmVifQBGL20d8NitBNjrU4vS4xCEq%2BNNzTyntA%2F%2BWda6Max0A8zZNP9kslt%2F9vDJqHR5F8EWX8tHn0EcI054AaGtE%2F4dsQIMJw%2BJHO6dyP5fsoHQmZB3EqBjGouRbAzz4Mfdt0k04mjEkJvuuBFtF6rG6LerKG%2FZHpFNZONG5I6f2FBDDGpKPD6oebqbn4%2BDb%2F8bot6NBpqRxOZ%2FkLk6qQWfengzkgVpGPv3T93piw4eMvY2qi8TzltL6wHQ8DHwtu2h5vS6j3LX3waTRTV9oHd0VM1s0ABaLlWoja4qPaGOl%2FUKF0qmWVzycOD2iwk8wIoZy7oLYkfvl0EdZAkNu85yKWI48%2FxVZA%2FGZXAzkPnuoqXXnDgFXuQ8TsO7RztsAsBXM7V%2FFsO%2F1IAArQ2mTcz9Gbk2WC8gqIC3j0rs%2BnZAji3e6XBxljAoA9GgisT3qkhOM1u7irgq0WEjrye9Yw%2FmUAeLmfdHZ3EW2JUU010h%2FYS%2FtKLJud1ThZ3tKswnyRuv85yJCpCPLYs8B6oV0QeWfX3ui53fT3uwQIMlcb9vN1a30%2B3RPvi7Y1W4U4dqNL4k9D%2FYMOT%2FzMEGOqUB9TtQSRINvSJE%2FodWd%2FQCrzIh5GekIQuqmJG2rVxLTsxjcLSbFvjdG4ZQmYiLOM92bqHXBfbj4c4wsxGQ1cgMkN1o5TwmH4V0KVdwItQk9H6Vysim0GBz8w0xaIhL8ULDjBF99iBwLXHFFAMA9FRAPkYPVNItWOSL2GCP4GslLHEyDCDfJyCR4DPFO6YJUBytrEaZODm3brl0rJU6296NY7I5zkRh&X-Amz-Signature=0e69f3eab0b70b1f366304ef64856ee6d970c4ddeb05760e36d391cd441ff617&X-Amz-SignedHeaders=host&x-id=GetObject)

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
