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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GIMRGHY%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDG6pj8ub%2B3dZRO1zzoZR3ry4ORM2ngjRODDDIpVieI6wIgf4QmTfQXqZKDHZvG0wN9peewtxVzwOD0LEzkV3CMggIqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqgrDXvkuu5rnAHfircA48NJYJ3BoFMwXzhSeyBWPY5y5ibuxNkJoMbLkD6cfGYlp8w69pFRWB%2F2AA%2Bpfb%2F4DU7udwo9fl14oHpmAwpD2Rj6thHoA58QTqAdSV0kZED1tVdEbVhSRO9QKrjFH1uLXvhlfN4rE3NDiG5mq7J1r2yVjWefgdxIW%2B8zLSWvD0qI3%2BWO6Di5fgNkvwVbqkxKXON7iWdxn4VveP22fdhpPgBEzkqbCV3tSmAB%2FoE9yXOTrR46bQVwh71HbxEyl7ZSDA4MjJ3SJX70ni54ijIozCOumSxq%2F8%2BwITMDa9IfpSwuQ01Rr%2FQuqgy1ndkG227k%2FtRqeC%2FhyfTanaCYvk21M243LyT8aPXfPBfwYE%2Bntgtyzw%2FVdmqgN9FoU9F8Iv2SdzrpQQlcqUv6ndAQw5S%2BkdN789zLRqrZITJnp4FxCILi9R7xkvZpS8lPGpGByGOWmZvpMUKAnG7EQsYAsIE6O3xwiF9BuAH%2Bjo6gamcShjWaxw%2FuWEp8iSOZXGVI%2BPl59489%2Fk240rJEsqdhJZ3pj%2BI9%2FWXSM%2FsoTpEfBsjovj1FuGScOTSYxF6zxQSwOickM49tYVNcLsKhp50T1TtmJOm3avCqT1lKG0NqeZGtV7Kjm%2B6EaUwbV7VJm93ML3Dnr4GOqUBADEJYb6xwp3CgsuUzk4U6aPZpOwNpsZoWajV3sE76OfYHiu0XzX%2F60pW7Ua3ZCGL1vYrQ7nrTNisWt%2F5QLQvjz%2BBpK7HtUKJFzr5QYQnqKqgrOdSJ2EC7Q7lbaXiLLW8jppJZVCLcmfW6Wrr3nCOvk08Mh7lIxpUcCMtKkVDNhDxeMHTP8MdaD2uJsSfjo6cKaAs475Z0jNfjP4GF6dG5EjDQIoh&X-Amz-Signature=85720f5d9987e2679c8867f47f9af65e8fcc32ef3ed9da66f89854cf5ea3ee47&X-Amz-SignedHeaders=host&x-id=GetObject)

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
