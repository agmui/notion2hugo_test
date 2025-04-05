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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ROVDISG%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T200752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzJtFLKyO75L6BtnslNTX%2FlYPgIAolt9%2FCk0VRSw130gIgSR5eRqhksPdMg0xTKs3LcDYX4xN3DWSEpH7KRiidD8Yq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDHPO0FZqN6%2FEXAg8vircA0InzWz00dvEDbAdI3AIp%2B8nGfceNupMz%2FVbrKfNZylQXKUe7xWqfIoMnN%2BIqjwzRMRQ3dOfAVXwaoKSMBoCalz7bh6YNR8Pv462LxQUjyPcDC6O5GICc02yR0v9vqfhiIOjxMn6ZvwL3L%2FAdH9vPIxa2A6gD0H%2F1mDhIforDts4u%2F57I47Fs3k3UtH0YXkVqrQfW%2BbjwQiaBeCrjRXRSV4p0BquFRUhzgxn7y6aG0HT4ve7tchf1r%2BQ6WSUhHpdaFbtrONcxojGD%2BI5TN6PpuBSjheuc4tTfF4xl0tj9OpZAen6SAv2dkr73v3M5LspSg2z47Q%2FiPZLB2vey8Dltea%2FKgwszOpmmzduVLnej4r88F2prj0BxzlUCbgThQ%2FpQX72WoH%2F5%2BZCW18uvCORXncBV8gA%2FWlLjovBd3D%2BLdsvw%2BMYpWl%2FnG5OWCji27SQxXSQVQJyPNcy%2FNO%2BnMn16zu7SJiDTykZRwI0ouyDaZ%2BHw1dI548rLbkqxb0j11qn9VT7Z0ASU1Ufo573tlQdyifisDt8XsCq4f3hVp9oG%2FDF9Sca%2BXS%2BR4sBX5xKTkNRNAAPwPRMqij0hsA7jiHbmMsAgWHUyWHNKERXfOkHpzJwz%2FkpoFQ3lssYogaZMPKSxr8GOqUBSWZ2H4kgMZhKHK0bf2awxb3M%2FQJeNE%2BiWXyqDCF5JPS79mVV6KkhbL2x1w%2Ftx%2F97EvsSm9BWOTW7lKA18Iz3jvlQkYRkSwG6554J%2FpTqSi%2FENE30BD6DlFHibFbznmp7StVWw2V9tQ0G8xlpENdxLqjHJj%2BVNiOLxQCwtOW9Hm0KcU91ntr0lb6mS4VN4qfZvISbSFyn0DPVSYILsOKNa1SJ3z%2BL&X-Amz-Signature=ff7ab0f72f556d8751ee63f3aa9a053edcdd598586c2a81ac3e90c4c057af72c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
