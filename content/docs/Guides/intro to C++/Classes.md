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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OHWW5KO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnd%2Ff1mY3wgi5TBlJoip7ihUJCrGii6H1oYZC%2FQ8px1AiEA0kUp1bhZIIdyHsOtZfUe25ac0iSQDWu1VzQQyj158b4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJutAd33gfIMb1dXoCrcA8KJJMbcp7c1jft9rNNLOX7f9MxjNv%2FzjCmCCsDePFOEx39cF2NjFTSMh3p4oYtZPWm2ITpkee81CjMB2gAmDwiGyotISgjYO0orbr6rTCUnHuqZcpqeHxOPdWLyxFu3B%2F1zVjsh9RclOr36cJCcpUMRj9CGPNcW0ERiz3GKdwlf9A50URE3cqeYU95fXLCHyRKBuw4hQ7sjfDXb2wDAWj1D00OD4yIz6fHGTfgR9tJatBLVQ9JygQ3Lnd7wxAmvbljncnRsB27TIUIjSh1J6yBA3jODbVyfF4BdC5yRVkplsRsuMsA7ROofbin36eW%2FdebHAgAirf%2FH7YheqKy4CU0AlAPIqYnlJipDpOCzLYpjzXWR1x9O%2B8KeC4du6e5tRQSJavHeTBfi70h2B3kPWYToSiXHeLN%2Bu4OAI8bgccJj3yuSb5e0ZTHVQsfB4Hj7tHAZA2fQTnw8QaST2zsRJiIk0wlpDpVGHUe01KgB9Hdl1b6PU4%2F1kymWNGv49GGkFeyKj%2Bvpw5Ia1fcwKfxB9c9nMvdhkIwPYLQ%2F8Ua8aisSQwtehhbJlAvTNJ5X03qWeoP3AYtjbIhsMweNpVqdhW55l1XUsRwAuLVeidnfgRlPsdoCN9fkK41AiZdyMNScu8QGOqUByEVyTLk1z93CFnAyyZnnFxqiPe30zJ0CG6r2rfMo9zLKcbz1eoxCPYLxm1sa3ga8vsPCzOsOHcoG2qGIgKw%2FJATYyR%2F%2BgPDrweTb%2FyQi%2B5SNW8WumoCIzfri8MBV2WZE0ufVDOtxn7SxQX4qfWMrtmzhT4wZ34wzqYp%2BnKtKk%2F9lxw8to8gaMi4KqJM%2Fv98p6el38sz4W9%2F1s4%2Btf50dBm%2BIKgjC&X-Amz-Signature=b990537df6a3b162d9559313118753b452e77698df4103dc8154957f555cff4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
