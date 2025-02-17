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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RXCADZB%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDJ2GHRW3VE9eT83CBCSpufUiBVnAODObrNuH7Bv4wuDwIgU9QZpLQhiVmul983%2B8pBqI%2FUWDEU1Uu7121ohpU4%2BLoq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDE56vWbS03lXeXlWSircAyusbqdf%2FNojocsIWMapqXibijUjii55KC5Zk9M54EuogdaGU9BG7sJo%2BCQboofWhb9vjbbFcqyWXXsqCAXG%2B%2FMSbPHL6yjzK1y1O62VrqJ3vZrcabmc%2FrGKCQYFUpZWdkLHr7l966Dw5selnJlGSPALgcfl1PnpqGf%2BqrGIWVn4qkcPxBBcFvRsm9l4FWrTS6ZTDwkVUVDslYr1xCotLmsmCj6zbfi0%2FGg27Tq5TqG43bZnA0OyKhwLl6FJ0%2Bcmu3XzQAmlAQccYmZ6mZnG9HhhdnUruRuxW9xzk2wGSav0Fgi34BlZ4E2hu05418NOJ8IeAhF8N1hfJhbYFTWl0UwTOC1CJ73maFWXknAxx65GVeCahgY9xA3z9HO%2BIN7Hp67pc3p3gRLfwrK7oiDMhNd%2FJiyO3WIXZQV9Hb08gEbn1aGbA1IYvOfCG70YAzb75c0rZQqINUNTsROyMVUPYnC2g4QNc5rHrZzeG7pdYdacSddaFkDz0sx6zC0g%2F2gZk11gK9QbTaEUjTY7jLiUfDDWOSodlocQI0ho44RLTZxE73dEMpZHJknraRd5yTqU6jSJxezRq7Y74WFBm28CKwIAJZrqb5OT6PfkawtByAUi4fEisMMrAy9uN81kMIuwy70GOqUB7cRaipbdYCR%2F3ooRTh9Cj3huLr5Rb77nvZ0FdIiYd9oVK7P%2FC0zeZhe%2FRVhiBuYM%2FOA2xCg1k0t1qdBSSzysJniAvxumI6NsoLd9UpufWEQ%2F3fiDVflRSfXYOeRQRHFkynTQeRfYCijoOX9w3rFHnaD2%2FNeadlGLL8W%2FcSuukHL0telqdN8DaGihVgN%2FM4pBEQ8mQSxzrAXrAvrqm%2BDjv2Rx1X5f&X-Amz-Signature=5c833226ec1a61bec908d6cfe03e6d4fba45c0fc43499f2a9c09b727e52eaf29&X-Amz-SignedHeaders=host&x-id=GetObject)

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
