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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX26EZ5W%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T150945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDylw5tCgcjLehYX2qLxXYSulLGOKI5Qe9y5MPqAanyCAiEAqljAdIdI6ySM7HTgSJRWy0Iuiq8WpropFDeYLRULz70qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGen%2BpWo6mb%2B219IcSrcAyFVj6G%2BcbzFAO7a9bW1B4egg%2BtYG%2Fl%2BZSMIgGpzPfxTig%2FknPTF1aH%2FajNg3geDKaImvnqnwRSgDBTrebujMxIH7yDOzU0nrtSdVEfCg6yRLZoVoLkjs6RU4u7kqac4YyoQKB7oJOwgvtGVFKjh%2FOd3xlYWlsPvfssV6%2BwKJHaHNNaxO7GTUAsCf9XGZdbOmPze9EL2c6SG%2FXkhXHonvvijwVC1wjO4o2wGm3rqi1u%2B4cqMnupmfcJyBLPPdbOF2KUYapYycFaNPbKez8imtPX8eXqbmu9ZEThyIQmVdaaPCYTHa9j4b7cNySdc19qNX13Vu0czpJspd%2BptCOwVs2H8iucy%2F0OtroufEf8RYI29ZWYdBJi2ytmKn3yvn4AfplmskICzqnbvle4GyEkiaLgxq0dYbAYEs4JzqCk1SzOjJOvl%2BrcdnYB7AcmUMhSiQWupvRCvel5iKl%2B4mr0rl41%2B0Jbi8cR6isDZQV%2B02uDxGX4qXFG%2FHuT5z%2FS7UC3dNxTIDR5larqotabT6ywIsIbLihUz38cJfsDhsHU0cFkqo%2FIhG%2BVJQa8p2A%2F3AItyA3zfFYgsekm8eLoAYpi3Ia4XJ8Wb8Hdoy51txnmxoijMIYmNw6ljsyegioc0MNT9rMEGOqUBwd1WM5wImt7moTtP9tXqdDzRfdwntejyNurBOZb7myeR8o1aEPo8adCWESzJM3ABOZu3AIZiqQHncIYGgyl7dNaH8%2BS2txxr9aSZ2pFC1BUsEBKUReQOtqeDPsYfGmKNPJOKOFPrthWA5eWZPBPBsGg6iiNGCGRzX8g2vUdlolhcg7tHgnJK2XhloZPiTqkGGbOGG4SRzgNOPfMJi3BMH%2B1O9unQ&X-Amz-Signature=9a888af477fe780a3cdb253ea2b0cb203346d4c0c063a297e0aeab348b0ff01f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
