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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW2CCE36%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDfWnjqhtcLyL8JlBvfo1ofLX8DEhKNALAn8EURXUjzgQIhAN1dXdg3oXtms0AVe2cuklmgUu6LHmOArlbOwUqoAxqtKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDq4Xvt%2BJCdM0zH04q3AM%2BhiBMP7evZBUZRIJGw86ucdihkdNVlKptHApA9FBsdslQqnU0a6%2Fxz4MkpPfPgQwntBLe65vI5FwOU8n6FUtIJgDmCXm1OIwFOsRVh0KLrcMvB7LOnk8uKYYXLBpmMjUpa8wzXT07FlZx%2BqCozfcNGWougf7TP9Vu%2FU85osJXCckYvNrhHYhteMYiBxeKMzlw7OHAZawNxHrhcBTMJpzrlCKSjagl6yAqzjmIcbYkuHgVAwlCvpEyQtSBv%2B1nrVWGKLrZst7ktXio4aY6yslB0qmtHslkE7o00bdAdCyHfzDnwCHAJO5pecsQuFluja%2FxoEcQyPhBax2jPZARlsW%2FfpOiSqUKsKupr3W3KGisvH9lWhuPwYmKG3%2BETVmghLa1EWFHoPATI4N6UpP0J1zjQ3u9izZzEzpn7D9JtxMQtun6zuYeIfgK33jjg9KfhPK9W7hd5E907b1YZ22YscF9eFEQHMqwV7YEatANqYzyJfcFcup6zeF%2Fgk%2BrNNud%2FKquwiOe7Vic9XxMYTUb5eC9SVOFZZrH%2F%2BOrzsqZMGBOS6J7i2GCAbksuY0oqdDAxenRVZPoIilnljnsjXgBDnD9l36Zm3ZTkcM%2B0xyCEVqlS9FRvRcghIbClybVNzDEkPXBBjqkAU4iNwTfzGHCsnvd9q8WvjDbQIC3f6heinIUx4Hn9KKvvrIOBAip3pb7NgDIsyI8C3C0TbAmJYG8o9QZy8pti4O%2BwJM3RB9tdqwNXNU1YQ3x3Kfgtx4CKvUdhDMjjxHHJ3IfmJNfnCvSWme9p8zJZM3utc3AFS2AzFcE6nWBk08EMVaCA7fB1l4wJDUOmbt1C4ipujPf9QYqbpiCqggB0EXOtBrs&X-Amz-Signature=a6b0a6241a78b4cceab909c48a3b62eecd26f7b7843b48ff58af21c00f4302a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
