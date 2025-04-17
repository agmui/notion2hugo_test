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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V74W74V6%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHARyMaW1Wk3o8%2BQwBqYJgMgLZReQeuC96Nk5dqTDltwAiAYUgUGqYNQy0My%2FzRsMWrYXpuSFAq7Cr9A2y03h3r7ACr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMzUT4VLfY%2B5kSTqPuKtwDq5N6ycAq3wBhzcmOFU9x%2F97eYyRn5FmTaI2wHTq8ZVPpsRYIx5K7WUXdCPY8995FChmLPO6MdKsmynh2uC%2BQ2NqMz3RCVMLH71TVHCC5vWah3puYZvJFQxL%2FtKIXw3LPwcZbjJtfdcOxEAB7%2BtKoxR%2FcHGBIDeFHF3e5lg0DmB6CIONRZfpiZ1oFVAYZDw1OwByZmSE7OvU%2FsHjRqaolqYxXrkVWJ%2F4KAKV1CvHRHoUeSyevqtIDqN%2FmCEK%2BaKYtFXm5ucxen%2BQ4OjSGBJXRFMlrR8ggWyUfuy8BtSDwkyghucFvuL6AoX7rUzhzjQjJahGmPMI2IglazeSio%2F7FVqp0ehUrxV4iTNfLrroGi4tpDWwH9gm4vMZdOFmCGbLTMzQA%2FwtT%2FKdG46IB8HlRMbwZZhldOtQfUBoRlJZUMMWvsuzs7Z3hgJEc9tYufi7bEldLaHVmp0%2FxZoyGznS1pIDoXGV%2BOetZTw1%2BXRbsWSVkohU2RshYow4clMCmsz2wXvxRorktgDlCDaC6YH5SmL9yAb1KOkpEC48xub4sjPE0K%2FoLj%2B9W4oJKVRc8WzMeY4lL%2B2DNV7dL3sc8yq%2BeDkj0kzgwmIhDe6NJ4wy5XdANXZw5XmurkYTfq3swwK%2BEwAY6pgE6FIReM%2FSBzzt6qAJoSdvI6uiXkV9dJ6nJ36kfym%2Fxi8tnacTU8XKEVStPwVju6uLvKVdI0rWdvfPxj0VVGrCqM3gtQ2YvuGH7DczNTJY4Dzb%2Ft2pHWnJEm0Bu%2Btu1NX8xbqD1g8%2B1ZD3KG8HED0F15f2LoRjkNfRLvGMbOzSEeq1MvbsE%2FSRe5eCysDQnG7xjpv%2FBIdEKtRdHN%2BZZziPrbCozvmOa&X-Amz-Signature=1bd7029605df177d496ebdceaa058946ffbcff0a78cc3719e68a4b76444d1080&X-Amz-SignedHeaders=host&x-id=GetObject)

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
