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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5MWL2H5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T004834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIFzQMTNhEVQDIJLwW2MDOvXlv3FAXb%2FgzZF8eg%2Bw6gCwAiBoZ%2BJpfYQCx1B8Wtq8Tn4Dp7z%2Bf1UfYMzWloW6lpZlNCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMRjnwpOSJygKe8b5bKtwDU3fq9Re8JD4xs9HnxO0RqSqeNtoNkoZQdXWgWtNtQTu6dLP9flPiU60PuVhA2H4Qrte3lUTfcprAf2wd6MCcR7IMlSOVeWiLhef5HzXBz%2FhlPH29RhiLjLoDRwJQK9FZ5qaRpq%2FmpZY1dyAI21TqpHSnmaoJ%2BfewruztlqHWBCcSsgda45kbqbTSbU%2BD0WP662yYgjRBXStDKPXpHeS7nnNooXqezM%2FBvltzhRemMYUrQ%2BJHVMakrpXkVev40tuQqomSD1zKlL5kpushljoxWyq8kSx6vgYgLiwpnWwT0vWWZbwQLV68aPaJR4BEz0okZ0X05F%2Bl50UnSKU6U3UdInVPOiWyTwRRFe9RLhEjoZfvtoOl7qWphSfbBvQ8Deo0c40owQFMSjjxJQaQORuI%2FPO2krf%2FSiXi2HlW0UIWZU5CPho38%2FKfLr7EyDgxTsGZdpBq0tO0k%2FKnl52JwuKLaXC5NG2kh1qXtOmCvf0fv36qy8UEuUq4664O2sSw62rRC01rmKDRPe3Cwot1QfEC34GUEM9xlKYIlAWPm3iGQxq2Qn1olwLpZveMLnhu55B42zjddKUJfmY4GdsGLas8eH3%2B%2FBxz%2B9stFDB419w4crSyXodCp3IB9oKOz%2Fsw2ICnwwY6pgET1o8v5yhfQwQF%2Fy9ZYrPzY77NkefjRBZQESzqD0yx1UGarPzM5zRnzoyes2QUpM1ZIWOQ4MPyc%2FfSyfd46vzqF3a%2FmUabdYrTDVQOSmEeqXHXm4vgp4%2Bq0wccGzYLdiResPEO7nqGgLjAwpW80lZb8v34E5Yulr8kOC9lvGefK50yYklrV61hRd9i8N3eoiHM7dE6VpGssgHvSFomZeOCoyaaoSMF&X-Amz-Signature=727ec64df61583fb016089ba86b619a961f1ed0b2628a6a88a2dd56583000efb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
