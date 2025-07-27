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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSTC76FB%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIEYPmNBJOYc77EpX3mGSx3tBhqYTCQOokuEIfT2PARcoAiEArKPthy%2BluZMVtEuhxvcAxuxe0t11TX3E4ha0Ys35w3gq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBbS63t1HdZj2AgUhyrcA914cr4or8ZTca51ZhaPwdlOcsLlJBjYjZrS8aNSJGWNhrUM4mr3XGW58G5HT9FfN0Hz58XUk0uPWqOon2EaF585D%2FQNPmAzNYEFzXrgcmEmBIdZOShNwlfIMkvuf7hfGHZhAa2P5tlJkHBtUFBYjduYoR2miszU0Oz0q0BBSmIKn43It0CsB5bxgRlXd9nNxJ9T0LHD3DWFFFKq7JG0oWfX5P32VnAixQu43fG7lt2bvttqsHu9yd76jlgnMJRv9jagNgfIg%2BVV0tRzsVed9RjTGYwAG%2BWd2v9rmhWZUrMGi40f4%2Fiz%2FBpMAPIoWYutFHtpzSJ7bMuhzn86CXgMwfNjzJ%2F0iFIKtBt8azS5Wi5650FiPW1xn8mQLV3rLem0UXu%2BT6dhWsmQ5OGH70LDXXd%2Fg0gMf%2F1aZEH72b%2BKMWd9iJ1gJeQIwIyD3eEuHzn%2BIzyELRxayiIAceVh83r6k4nK3osnm7%2BeI%2BORI9dEagtWbkglQEC8HHBt7oe41CuhX8BRTfC4ztBYZwFxOsbe5RqBQp3VxOpF73Va%2Fv5%2FtJhOzQ8N7DRXBmtwhAgA3ljk%2FGSiaTBvgIC9tbZFhDnfp8TiPGza1ery%2BY4CpZ46NawXFMyba9ACcekLItUEMMWkmsQGOqUBNXVtKiHzZufiC3QGu8m2j0qWPdaeR0d6qcsglndgmAbUQl0x%2FHXW9jGIfD%2B%2Bu%2FD3anz%2FSqCaYbz%2FVd1FsjwXY9RVw9R7b2Y7wFwVz0GloL%2Bd2N6iGDLgfiCrfQ78yygQKqanlB%2BfbzhUFOHeRP7pT%2BepzR7sS5TBXxewKmbC2iPBKh6JqFUD8EYq74cP5lIG7Ie2CbKzmaMe%2BEHhjSbwZWDDSGMq&X-Amz-Signature=5cca4205ecfe9db2ab845d0343f407071d4766e48eb3c7a1a071c551f0e977fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
