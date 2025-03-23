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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJIMZADO%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIBeDBkQztgcgJnCzzqli6j2N4NdqvgXXMcyvO6dCQO%2BWAiARiWPyswnWfYLAWMQDQdodkudVKCU8drm2OcqIA1NqmCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9Q0MU3AOTJwvcWAAKtwD01NKGTjhVWVIWNAmrOdOHVbklsJpBgOdbtW%2F1BCbx3m8yuE8Ei3xf7%2BEnG7DadvTg7MXV3lAoMTHvb0zF7dOY3fg39ds3AAVUyti2p%2F%2FIn0o799b9tzWrpkwFyjwsvbl5N2bGJ1IJUCsGuWFaImuhQ%2FgkE%2B%2B7Apcmyntq3U6SU89Qi0y3vN7RyDbnPikjB7znfO7Q4ug0cO9UtSdMWzGk8J5lRK0RVdi0R3YDWseJ05VN%2FK8hsFA06OMCSU1Q4kB4JnQiwM69uFUA3zdhrQHawtMbEHEJtWRl0y6cnNFMlPEA4xffAR0IzzJVkZqUP9kQjac6Brzw4kxnuqhfOp%2B%2BK1xYY2QyZ25uIdLXqVD4DP7jrGiI3Y2wZxlbltSwRLZmAgaqr7q%2F8POm64FMS3UpzvrXVKH8mF8OhBbsMcakjIda2djrKuGa0Z2gOlyPHfs4AGI5ojHzvBrnd90ctsEr73tccWTAlxUJCa16ihzfeJBnIeP%2BIyp5cy%2BBHofYLzsH0hOHmpT41VTtPuxgejprmfM6L5VsTYf5zfCvb%2Bw2KAO7QQCBgfIzcG58QEJH%2B7DyT9PlHb6RBr9SlSEZNmWSivLYRBcfii0cQtHArX4h%2Bxz6O2t0biIyoUhSRAw0fP%2BvgY6pgFbvOcE9Gou%2FTYSuXfXT0vS%2FyXTrvEdpEHb3Mp52WDRi%2FL56mGHEvKd6h0k27%2FfsHr%2Fu4xjFLMj8yW9uGTUzJFo2B3KgmMFasKuJpV%2FwejCzcLmr6gMv4ce%2B%2FmBrlGHF%2B78n%2FITWEtGHmSIlv5YbkvfAc8t%2B%2FOUilKi31ywbp%2FQXQx64G4tV90SfDha3JkChU53x01KFwNtDZ2SC5I6CPZmBoPiZpNM&X-Amz-Signature=94cecf8a579ac2292e815998e6e292c46fadbe37aa78bc2e12c73687e244ac96&X-Amz-SignedHeaders=host&x-id=GetObject)

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
