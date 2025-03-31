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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RFGJL5G%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICOAx73jElgv3SfLFzKupGSu%2BWPzskH%2BKeaM6TBYONJgAiAPRHzVlt8hI8WXWyQCtLlMliE5GGRdyfI3JuzyT75OzCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhTWNAEvqkLBWNa8yKtwDlsExsBZlXxdTrszLu%2FFTq1CCeYj2y2EwSirfkkkXkbMyeM%2FPI9mGJoXWAfLX0ewFQjsMRtHG9QRIq8YToQ%2BDQYEi%2BMgsQhzOHJKyp7jrkYpOvJy26WMs5vkIqeTGO0nmhwunutNIshr%2Fj578wLgbn%2Bt4CY8ODP3JvupRdAzkdGb3CfXUk8Plj%2F1jYKDVvK6T1JFWZgygTvx5Qs9MHsFnJYSWTJ%2F1hZvJaRbkV6o2ImYYJbgicpBGcweVAqOuLJGgYBjXFO%2BlHdXPuyCgBaZ8pluo7k054dgyu%2Fx%2BnI9vhm%2FtuScOk2IrYVW6ZgBWz2fhNRQLqohqLEEVXh6byZqG%2BvdpqLBDD%2Fh%2FKV80lb2XAXV8l2WyGlie8bn8TgdQaCmFDYNf9uycy2UrfmrAizRw9SGVduEE%2BYfubTd%2BJG24Nzrv7dCjpWtjfIXWN4t5mbxl6pni6T9cJ6%2FeJaGYqBX%2BehKOhmUmX%2FyFnD6HQhdyVeHbLS5hh6UvJ3Ma0WnXMOWfAyvIzVLumjf%2FkmTajgpEj1HpM983kEkoxg9KsYXJTys74ZMUtq8P9EuE4PgO1GBXAZIe%2BR%2BmhSZnLqv1fLDsxc%2FI5NrW7LqbE6HGjhfTa74n8JJ96tBmM%2BXFpcIwsM6pvwY6pgFnjpHokYU6jM3Pwv1Uky5L%2B3z1Zhd4UI%2BCDTNMQ1LjyltHWdvhrpDEigXDInLs9vWXKV9qVW%2F7LjlJOy0JBJeI5SQda7jMHw4SYyku6UZCZKpm3K39hPF2G%2BGrT3wXqXMjuITJRigu5VTClK2NCddoq7gH6LPza46AwAfbc9CjKtj8kXICuYnWggtPRJLw33YeHfInI0fmjgqZwKzs%2BU%2BSLL4WmPQ4&X-Amz-Signature=c3a94c5e291bb7934bd57e39dafe56781aa4c22b99fe33137b7904f78647ecbb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
