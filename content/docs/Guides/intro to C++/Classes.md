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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4BXMNLV%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCirZouJo%2BHy3tUkObjyM45UwqKdIlKC1Oq7drE6WJXdgIhAIIBy%2F78%2B%2FBZldcuhZGEtZm%2B1jto9GoIQ0Ae4r3ZVxYxKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBAQhTX7b%2FYLgBJ%2Boq3AM2yespbNrN%2FtS5dlYOClrIN8zouZIUaDMa8oAs8XvHo%2Bvn9bWfhj6zAV0lgJkariTjNqIyf0UcMlTo6YW1yUdHEc6PQuZB8avjnVZmzXH9exXrkT3nmf01TysDo3UYQ2Ck8dZ1hlKKo07bu5zw5lWR%2FNhEC4YkDkNS1Ogii%2BcTNuPOYMBcZE2hD0vDROpmOoG7ixzCIbwYTuwetHVDoVf9T89Ck5ZXCWM6IubhJ4P7o2ie4v6w0X48LyPfUWe1vEfM5NKn3ata179Nb1a5mGJoA1D%2B%2FiKuyTQZyIyTYkKncVuoKNKzSAHdIhT14RAHOBkGMRkGRRBVcBwRbSJsUE%2BJwQk2ckRIxXl48wAQDq2Scyy9rJyhb1mZxBx3R6GaQ9vpqyY0tvAzkTxbExvGx%2BxxRUKkwfCGGMngqYKG0kfl9%2B90Oq0pmHcA60FgKUpnmiQFZF8%2FE9eX6HC0Aczoxhp8lG%2Fm0i24VRXuqx9iE%2FLI4FCXGrjHCRYpz%2B3lBUb0KeEOvIpSgwyiYCltFGmAW5Q0zHB8oItG100lu%2FsEj9cyluIn8TKbFHGKswe%2BPf9qswGTRFxwmBUvvh7QtnjNKVV0euMNUOhsi28Brb4%2BWuP3pjLIEnBP0uyipC2JWjDL%2Fe7BBjqkARsSxTy5LV6yIsgK08yHwpKBBwcjI%2BXDv5u7RxsXgXlCQx8m2PL2CBHDWuOd5GK6QY32DotUc%2FZ%2FdMC5NKXziNMgIWZPjBdIAclzYWxsujZTdKxGuyMCSZ2Y5G0g2HTmncZqVOK9OlDp94B3Zh7S2A1edUaLucubmqC3hS1A9BmlahoJblq7RZ5W8YYFUAQ69jFimS2EvvP0D5N0RPWDH%2BpPy%2FZ6&X-Amz-Signature=bbf55a8e00124874bd1f46cfe6e92092af2f0074f8e55c021cd961f1914d08b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
