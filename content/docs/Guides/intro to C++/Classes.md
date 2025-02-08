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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPGEJV2E%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIGVG5JRmOeXnJyKgJLqPmUf3QnsETUllhNni%2F5lvZj9uAiBFULql%2Bbg8SLDwf%2BA55yFotVduTzvbGrCRauTNZjHYNyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4SD5s%2B%2FDox1078qWKtwDPRky%2BNvJqGiaGokm%2FlCqGWf4s6DXZDWwf2WpmOliESXNTXxjlWvmTQWNpCi2cQNs%2BurauVmLMeU8exmbHqnosh%2F7m9pD8%2BQp3AllW0q7pfox4GTuvkwHsWfq%2BIxqNO9J59bN3GT6O0Av0o3ZzzWJ%2F78aqyLlY9Qshu3jmPW4Iw5uImEx7MIxkfE68fzr8dVVJDdNrZAwslIJuZavgbkza9Td8lWOVkmkxHhtAiNDnXYYh6womyx388UeUPL01EE3Plkd42%2BBPeixmvBdsoQUhdgp9obbOfYmDM5khphcVF5Q188EAPvm0ijVsZT94XtLSN7gI%2BDHmkt82mhMoLv9ZGckdxtXKPxMG4Q3u7gSl1CHgfOdMveko6xkOe2ceSgQxZXU7GhzRrkD%2BsQyZFvIXDkyzG4m2rSqC3IKI1uXHbEzREyHZbQ%2BnKhi71pdGQu%2B9MAiHCNDyklBSXJ%2F0e2743dJoGEwKruhNLYZOxgwwnpnsU5AFLtXU0fjcZfktir%2BCWjbwiNkCpY4gjrZgt%2BQjfTnry%2BnhiE0t3IFlgf566BXb5SgCbLOhFommaGgTjdhxu7M5%2BgdeVIBJvR2jkpbwC%2FH1N6AriiYa66jkbBO4y3YdJaBqlEsTLp9c70wooadvQY6pgHEu6gng0fXb%2FVmupUNCOBUTcC7q0UlqPT1cuAlAogjGsfWX6JhScowj7Cldlc0gAOkq%2BY2Z4l9WONGtGStVGZvsZ1uM6387aGbSE7S393I4MmLxbgDzzeSKDFciGY4a7hh4dyDCUI4NY3OnYAmH4GIGvmREKeNVv0DL9TeZbzK9L%2FI4eeBsWYZnEmACbO%2Fp7xJ9HGx%2Bn6kwAR2pjsGRdzOZ34hTqwf&X-Amz-Signature=f63e445944467ae6e417971608dae8d7d3b60c87e1706b685f5e4f75da2f0331&X-Amz-SignedHeaders=host&x-id=GetObject)

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
