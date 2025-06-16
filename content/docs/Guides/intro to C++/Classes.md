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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRX2TRIM%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIHFCaKNUZJZbjD%2BCCLMN9stiK%2FSbPUGqE7K7nyE0PzYNAiASb9nkcZ79717oAWojhdpW1AQXZSzXFnOArxYcEdI%2F2Cr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM2B9eezXDNuVdEFi1KtwDuh%2F9EasLjtYOA48%2FhAmOS8PQXjS9qeTknU%2BH9Vnm2iXLcAzsw8UAu0QaA3y8YLW7ONZNR1pd0PR4qkKB8bkEzOgk6VJqn5MhzSXpkYOW9rUSH7nhQ4tWbheu6Awv65Syhqgm1fLCncDeoKxls5XcUsLiZNwC5CiiTdFWcyK7nPhSveuBVSaEZ8olhAMRu8hph4W2B%2B%2FpK34WyVXRbGUOWLSKWS%2BILlcItMGqlly%2BfK0hd42GzA8Jza6z0Yyiy22xw7N%2BD6rQb6NghfF9I3hI%2Ft%2F5hXJclqOiKkZBTt2o9YV0h77qGxJLYi4RPgpAhhWHwwdQ5hipvrPBwDJFMsxsNyh24wU0gcYqvGu3sn7DF2Ityy%2FecDvOy78r0RGP178TWrk3Mg88cjSv3%2BrdoeWCKcti5DTQSUxNaEYB7EWkUWDnxD30Z%2BXBfsfLcUTaiJawNOEijt9N35O5rVdeAhmkZYgbmIPijU7mcVScZwDQoei3nFifhRZDYAPLO45xa6MInWM298CnRcP1LpbUjImc3rUx47t8fBhd6gtXy%2B4PRozdeMxyt1rNx8D9yag9W9GsSMxbf6lyAqzawKIYPUIPo15IDcs3Nh8ncODm0lr8uqsQIrlUsAV41w3C4MMw%2F97BwgY6pgEBsFmZ1EiRgdsQhFJWg7Dc3Mbv24dy6eefgwW8kwd6HM8kAW4q8KoDVJWr46fpHeQcCXHWylqN3ZjQwnjpsggGhO5YQ%2FMAsxiA2sTyVUUyRMr1Q7K6Up2ZfO%2FcqgmmF7yXYYH3OiM23truBmC0YZ5XbrtiDbYiC%2FlD8Aq5LtKkgamAZleAlD9NaPzt3xn%2BMVwhrEdI870m9DCr3gPAyAoCQo0skfBf&X-Amz-Signature=aee23699f2829e5b2a36761a297a87ef92fdffdc99df480c6560516aee165895&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
