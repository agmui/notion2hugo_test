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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJYX4JFE%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDGZJh78KabgHmjjrPSDeEFP1CaGKuekLWxyuv6UOw8VwIhANbgu%2B9YU2sa4SS1TUsjAP1SfvchDvkWQ9fmK%2B8C8Bm%2BKv8DCBMQABoMNjM3NDIzMTgzODA1IgzolrpNzujsEzoe4Scq3ANhB7H6NFEim6zegjIY7Jq41320ixriiJwQCFtXGA4hz7OFZNF1dlUKoT3aGMXYs3cHyRUbWJiys%2BZe5Nzq81gM8uTTwjrkqMLPtWbksJoxF%2FW4ol95hJgimMHx33dHcOLoF4Jfc02FqJtIyW2hrMCfyHhaNE3J7TdOrR1RbY%2BrWIwIfIqr1VJCE1L4nr4euN6FjFqa8KZeIyO8C%2Fy%2B6zef60V55LQFhBYnTQ4082Q1V82oA5xBftvbg7w%2B6yowJVvrmdhpvY1mzZxnI%2BWWSbikVggJxvR%2BQpbYH5hbDsZYsXVZuNHu0yo8aEN4bITkPeC0aUSG1ArVeXTQNkg7QEHszFJY%2BiQWbSlq0mjDnmEQfsl%2BIx8JoshS7ruw8m4alP8skxItEJq%2Bd0Dg9W8Akty6u3UHnsZ6KFE1sbAN1BBmvLhht5xOhZl9fEBHOHLWAKGYkU%2Fj8m4wmJHNnhEgqtW550m0iE7PbVXQeizDKcvFzWL3YPZM5px18njLnN4doJ5ztiWxgvu5kmf1nTEqyFV4x5KazOahow4fpWliKQacY%2Fh23WaWLGB12CPhIJwyrCPCl7h1vXWJmZMMohsXZoYNeQVB3wMyBuDmSyPN1ijFsePxipV7wMpDalAcZjC7s8bBBjqkAbWVW8BMK95kuO%2BAkFef7vGKFTy%2FKHwjrsfu4kS%2FAW3%2F5OmBCtKo2Dr%2F7ukieDrb3eCPOfxHk5sxhkgxpe1CZdDLDF3cZvrOhaLGvYHsWdfrzvL8GldE%2FLjq%2FF%2F4nb3rpGGf8KJ%2FwjJsXxZqNh%2F5iOGmp7ce5hhdyq4AGXm7FDUyiVCwsmFyyQ1%2FsrTLhdgM3KWwQluQJqAW3PwYXdEG9ofmc3aD&X-Amz-Signature=d29550459d8080cf3dee587d3e7b2adf4f7dad96de6ab2f16c5eaacb719c7914&X-Amz-SignedHeaders=host&x-id=GetObject)

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
