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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKWIYJFS%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIGlcJH%2Fj3mBhN2cQMUP%2FO4XKQ6du%2BP7YZ%2FCygHLvmEJ0AiACR%2FcZ%2F7K%2BAvHe4glqu6kV74ZF4GIadh5NdjX40gH75yqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F0FRkYWxr3RTE3zGKtwDv5W69gWHSvcOm%2FWuoiw8NbZuzY%2FkRvamheC5KLb6orf9IfisGjCimMAWxtr4Ne0K48nnzIMJUV80Y8zi9iSDJ2PqPnsMWUIwKCAz0B%2FzXH6juWUsjasAfO5ZQ6Ifg%2BkFG5H7B24MrTEW52wk9rPVEhdkr0sxD7m9gpyWHcJHr%2B5%2FpyeN0g%2FpRnhLqYZEkFi%2Bq4UsyTdKDaqIE19ZiW29cAJE7Bp7hEw2y81gJNu6r19uCYd3rzRWwX9EWqSype%2FdOqWapzJKFKOZ5wuAha2aj%2BTW%2FFiRC4rXFtv6QmT0fzNHKHg4OazoM1sqNGFHjo7Fft9Xe7AlIwK7TUJDNwEohqg6PSSaCQF9u38jXG1ocMUOoxBBCO%2B2ImuXDIdqYPsjS9tDqgVcNkc253PyYjmjJBu6%2FF6IpFCPQY1Ffg1ityhHudNmvPTwX22KwxxNF1O1jXNuBgtCSb80bDKhXMXzuBuSs4%2F%2B7tGxMC5OSPdxJQyVeKyF7cFKpKnYoM%2FfXFtamj6oCJdMVN9JiByOQCvj16w340wfGgd9hL8W7KQmEzahe4bAVr2V%2F3TEffkUXjsAEco8IcQEIDNr6tVKzQluTDH7UZ8uYyP4MDUq4eZG6DJ4WzJlokTwUzMNM%2Bcw3aW2vwY6pgH7%2BGxIBxb7eVgo%2Bok58oyoCHatjF5bL1TNxZeqF7ZlsXbp4LyLlabtpx9o4y9VhCBgZRO%2BQi3LDAkJZhgXkVdOlgX8cOSKX4e2yAYR9xVfXGuBUBT8CexaTHOcaLc%2FMJAaaVTwDUS%2BmXj1Mx89xCbYnnWRfssfq6a4zKSptElnhIC9FRh1u7RUrJhMyISbmTeA6xd2Z2Yu8tJfWVqQmo8XwRxZl6R5&X-Amz-Signature=4a137458461309c825136faad0b48e52dc38eb3b99531e2fcd4da67d1134ffd2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
