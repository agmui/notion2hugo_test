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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHM4FKTA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIC098j9TYiGQWjgMXHTg30OAEajEn6yBFYlsz%2BGa5hHTAiEAqJIMbkHuC%2FAxPFtpoKm2kQ0WyN9pajgMmoPvDoXQ0zgqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPpPl4cHyw%2BXNM%2BVircA64XdIT0Zi8COAjy0zHFTeIl7ugTAKyOYOrq6C3VmHx2Kan1KHXhEL7qa0eX7p9QuXfyDKg7dwa5mdIbwxsVZQCjI2yAjekFXfI%2FMMAOSgPBWgjvNMi6ekOdHpwrUbrNYxVRTW2AweDaZJuhbW2EfN0cTn3ydKkpWX%2BtURzEMTadllaLCAP6V%2BFAOh7mmJU%2FmDM3aTOv%2FCZNbohbrCzk5ib%2F8RyVBLJVTZVTY3JK6q5fC7aQYL9bZQcmOOcIU%2BUDZV6xQlRANM0lzPyICqW2RbJZrOGdKyRK4rdta4Ky%2FuDboKaTyQkGfv%2FT%2BFQ9VrUF04ZaKUjdhW%2BmiVA4WfL91M1TXIzk8RYoM5ALYIBm667yk9RxRpOOGx4qW7gMZwiXdUbt1VPOi5pa9CWO2AwLGbewnOUkJNsPSynbgyu113k1sZvpX8H7pVtxEKMGcKGJ8nPtKktnWoIJ9mB8p7ALUIrlxWzVuy6zvF%2BCcJf1rXQH%2B4KyQSn7rSU%2Fd7%2B%2BVO54cc0fle5zJ3yxIMGeYEDBfds9P19UjCTUEuk637M%2F6M%2F843AcCo1C3eQB4VA1nTSE0m4l9%2B13GRZsQiptWJxgPihD5MNkmk6WHFMLbgmhtZuWfuN1YsdjnuAOusIQMIO6n8QGOqUBy%2FVnkJagW2KpuiEHy9CZ9yAWoA0xttILLhxUDOipTA1AXMkl%2BWSqD%2FlXzFKXKrd0F7q6Am31ALuXmNosjiaUuLvw25qoPIbVwKUG%2Fg5GHjsuaO1x2Viv%2FW7Xf3ZznmadR7YJg1GkHrke0Cuc%2BPOjnWr937he%2BHBH6jrPUE8eVypUcyPL8UkV0xwxgC%2B86edZDrBWF%2F8zObbFEPMLNHGGvr1IRTHp&X-Amz-Signature=edfb1d22145f7d57c6e93547e2d2d3eb1494d2f90352edc52eba12af61064b1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
