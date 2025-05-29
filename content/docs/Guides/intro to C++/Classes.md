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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W63RJ2VR%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAcpqcv5ratVc%2B0ZA6b5fndVfCzIi3%2FvqOJXollK88IgIhAKuU3peYjgSsgrx4LxDAKoFG2VeDuwenIX36FiQn5b7jKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjnPzjTtfuQblveOgq3APbuliTcRkqAFaX8U5xZPD%2FZEI4m11ebgV9ZMrsdH%2BOArmsMcJUsWtLnyVdk%2Fc9QaF%2BunT1%2F7XGSkoa96O%2Fb1H88IDZGWL7q1VEQ%2BGqTH1bGjcyBwbVqnRzt7giMJ7rq7vc3P4zKLQv49wzME%2BJ972MFkdy4bDhCd5zh%2FGzGPDLVOnFzolBr7xosilEGEkdj98efy7wCrKcuGDwxEsZjKK5srv0GoNTJGLiLP7lVXvwAyEMclifu10ACeVqrHWdwmQ8QCQpvq9%2BQ55HeGy3oPpCpWs9m6JuwZPv5mq%2F3IjjBjlldZw1T%2B7HxAsIYTeK2WTqYHxnxuLPcI5%2Feh7UjaJLQiUrvPYZvcWRhexNLHA3APhOeJpHIpoT9Q8jrSvzsV3i5auvZPGmn20deU%2F5wo%2BeJqvH%2Fvlztwdd2beR7CHxePT9SRnr1KHgLUDIk6uHlPv916EL4tP6uRigVLGwN02rVOwYf7iVs2d48blWIda%2BF%2FCI2L3a%2Fjk1dXONGr7TduMETzOcxtN4iq7RukfJy09ARHBfZZlM3fFaNOtXpGaefw4G8ZA2VMj6gZtHoEhde%2Bbf1eat%2Fv8bb8p8AiPkccwjn%2FmiDhpyNck3f%2FkLbcemfFuCC%2FFTzZBeoJk4djC62%2BDBBjqkAcacBmWn8hvbO9kHTvmiXcT%2B1bTXQ%2BGIhYxmYpTHbQqgO8QJkS8cThXZOx0IRmDyxZc0PHDo8aSCJP3zIR9nghFpl%2BAyb%2B1XnXnwq9fauUkPRzQMeJks2%2FjJFvz3JCWMaGVkTxCKtlqPDQFiXz%2FQulT3QzjsXR1LWEoNfzHxwAmuXHQDRF5vX72DQfjcaPO94HCslyTQxKFbAyaMx%2Bwv3bo7Dd94&X-Amz-Signature=ee38924dcff68372c42f59ca98b2c6b9e95429289c1d254839b9e328c68d17d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
