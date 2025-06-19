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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466222MIANZ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWz445XbDvVYu6h3bVKek8wpshBnksrkPW9qzV6HO1dwIhAKWEsCNpPSVEpY8ZuQUvCooYGnQjQMwpcZdCNLNQuw37KogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj%2FLsI5oJPipgWedoq3ANBJtisPySuh4oCmPAvCo9oYqmFTqFgYiHMERs4%2Fub4AhYWPPz7CZJxIfnjCharTdyh5rEe4Mdgtl5CVwLj4ozG7XEAnYmfQv8i8e2HkcD4WmzbVYDM%2F3chOW9JkrEa4WOGDlH4o1d4PiyI92jaR68vJhjK9BgmIw95WJoOjhFW7nkvFYO5mXjKIncSzgEfB49b8i2zXH3oZY%2FwAMD3fQkjE0fC0OBljdNCcp%2FRgVxERPhKSNKgvFKUbT3W%2BujbQ1tWJgum82MbSK%2BjPzMaUE6YTtNPEr9b5eWAtWc3TxPYvBZvGfDxH3zXQuKPtuEIGPed1daonezU7a14F8is64eq1hAJ0xy1qTs%2Fr10Eu00tQu8GitOQ2rFM5M9RMcRVgdB4z1rYGCXr560tp4Z4OYEmrOqJnmeGxeqoR22VhpIgXWdcJktcNBL4xM1znYCBOBF%2B9MSSjgof5h3t1vvWNmdlDZY5D7qJDkzoe1IA4tCsRU%2Fb%2BqAaQ4ZzVFP25m%2Fg8S8Nm6jX96GRoIESC%2B8Wg5uqaXhwNBGNQxg6jZvkAlKWEQcPI8oLBfv%2FnBLQ7N5ng7qJ91PAPnhtkkFv9clKRrWGxRlsj8PJb9nV91DKeEigQ8ad%2BWFowjU8Ey%2BRrjC%2BmM%2FCBjqkAf5HhCR7hF0JvGZRnjRzZZM2%2FqNPIYr%2BfWyPWpkN2fsWBsLD73P%2B6XLQwrLK7KLTp4ZfXFlW4Nx2q3%2ByJtfQztSCUTrejSh6VbEsCQoAUzNDpj13kuPsBD%2Br7ez86ZNC%2Bzzq35ZxB4qc%2Fyfyr55RdH6obrx70xgL0f2q8Fy4AxTpqh3%2BUErQ7ea2JA2THthXykxS%2BohNHfS%2B9FeMmXegOS%2BK3w7T&X-Amz-Signature=e6d2838249a0a696a8ea2833f3e251e806c7e943be1dc5370d70b98a1a9b4aa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
