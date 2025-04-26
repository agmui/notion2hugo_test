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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WE34UA2%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHjwGL%2B6sflaF30v%2F%2FWX09EuzhjPrqLTDHoRYvjdReNsAiAyVwecn%2BKUWsqrlD454vEwj5ZFSObkRsifzrxasnxhcir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMWW9O%2B4JFy8N677VnKtwDzIv1F%2BVTOG4XcS7XNZbwqWVDeBrBZF6WAozJyX%2B8WxijuAbHY2ULXKID1XfwIovlSgvx9xlVLYQ%2F69DYLdESvTlBqYyRjyb0PtdjYvA7yIdH%2BAFVhLsuMWRGoFQ7kD7JQbWgwLeBJ57VP8Xl7DWu5mcXnSkOejCTp1fey%2BGBqUVJ%2FyoZx4wh7yMgtPCKkdRO5%2BggnHSeftJlm3fixxZj962M87pvNF8%2B%2FjsRRrVYfHL7jvpTVbbD7av%2FYv5CydwOiKUKrf3fjkpkESyDPiQ09%2BLZ3yJpgqiM%2Bv22xW3XqZGiwjEJOFI9vXBps2zDGl%2B1dBQ7GxznUkz6PwyKxO%2Bz%2BXcW1dB7HQ4UgovdE3LmeVm3PyJ4Ikp6Soy7%2FXOYP9w4SzqqOfQOZN%2Fgcjs%2BtB4Zg5KLGgGKqHsMvuJrxDZz9KJFUO96qpL5q6gyo4A9EIC7FXtuQkAGotIHno6pFudQrI0qY4JnOpA%2FE1cp7dk%2FS82i6Vzxyd248NT%2Fi5cAOa%2BzgIS%2FQ6TMy0IdQ2kkB3kroJNf%2FnH9q9IYzdR%2FqIPrj9di745Q7AeRodFuCtfIo8%2FV3eX8BreFmdPqHOEV31nWjkzq7oPdZei2xylb2V0DjiMBHQKEqx8twlFWaTUwh%2BSxwAY6pgHky9jYatHL7VSfFdr8fZ2%2BrDjJf4ms9LVkB6Bz%2FHB7pWI5DP1r00dIj4VJ5wf1Xzk1V6DB5DqRaWyAGQh%2F6yY%2Beu39EKV2fzIbu8MFbJ9R0CVmUy9yzkreQxjQ55OfJQSgcVjxtcKZAUeNgxnXMxa0vbj1DFfom%2ByJd0%2F6RT%2FGVxrLJnf%2FcRMIIkpVxre%2FVCnFM1lDgvA91qg8Z1bOv5X4vL02ms%2Bz&X-Amz-Signature=90be0489f222751663b58616a6eb3db6da4356557c377c183fa0b2f23476c7d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
