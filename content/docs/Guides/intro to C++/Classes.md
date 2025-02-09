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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHYM2EFN%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD48Mo5WcqL7QyNnE5%2B3SEcvgt1HZzmwSYyp9F4d01X7gIhANKc7TmG%2BU4h1fd1Ieg5J%2F0ExsFhBNfT3DNaw5npnZkcKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6gw4cBFm6FCB%2Bl4oq3APzKHy60y90%2FjMknyVHNNN3okDfmRbRjXNQZiKdcvx8c4ebPbYOLoAwLdfupX46JiYIHT4JuUY1da%2B1Mg6BhgB0OK0MFMY2hspIgR3BaIQbap7MOj0H3PlbWV%2F7pK50nP2QQKcs7c5sQ24PnGNENF7reVfBu9rv1PF9tGs3NTIw8zE9SCnejIsMZhuKiwqm73YxgfLTe%2FOqWhvUVIrN967AKzJUqqyRN4W8AUmdJasa8KxHOfTBWYliwwuBYZPJb%2BQHJqBOVhviyeZ7QCAnPVWOAtxlI2qyMQ33mT9XMuFK8Yi90qIC7hscdUlvE27qsP0QvjbmGBJwNbyGDngkUzwpml1%2FjEoYV%2FX9b4ndvpFmZxMIbb9gJzF7SsUQeMZEkANDx%2F38RcGPVlHGKw9xmAgOeEoaePzmKF6NuCtVbM4oRF6xWeLGEWeY23fYKkiwIrjW3p7A%2FXZvljHMkwKX0q82erOgjogXXgT8Az%2F7B8TbulV77RBcRL6YjkX3UF0s5X%2BKBjGA9ycxAv8z3JlYlJstoiqEY6gVxCpALjNDWintDDppi8ucnkSXVVxXHqN56KMercLFVhSHO%2FR9g6J%2BH5Sx03to%2FRmT92aTv3iJrKv3b1IgVKfvhK0Xs86%2FhTDevqC9BjqkAQWGozw1XxrclQ0FZAGl80gpmWTtHvKqmfGGxNxtVeFv0ncu2MS4pGtJy9qlXvLMzWViCe9AyF0w6MI6DT8IiqryXR9r6YdRVyqAQYUERebM6YUwRPvpwi%2FrcJVSeDB%2FbM7RVa%2FxSB%2FLeYtdJdES8l0zHQmjYLrhA3BzmurTx4kpWj0zDl3bXMw2QytFsSvk4fh9slszNMUn9o4HKG9X9EocZEvs&X-Amz-Signature=f275907fcf67b1392f5a550f34c6b27680c69efb276bc0dd8cef04aacc7e0169&X-Amz-SignedHeaders=host&x-id=GetObject)

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
