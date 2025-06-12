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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CWG6NHA%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBGUYA9PxSt6c8Jn5Ayor0W4IvdOxv209OJ0Knfi%2BcbYAiEAogCelEssNJsonRCPxBA2OBt9CL%2B671uamB5PNu0rdv8qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHUfBxukai5eLfNIbCrcA0d0SYJ%2BaOtR7raoAzDgCzMHWuekgPBdDm8qGEKquBLfPzTmzhJB3ImzGxcv1zg3gkHTF%2FhKMNASgaGkGPPVpfmjJX1ou0ztkScgWekeXJMVadUvU1x1TCZ8lFcpkEibJbB%2FPPwU1uzHHbg0aBk%2BphjZccTpClRhZR87itA2Nm2bW1u3S1SsBJnFAujJA2kgBwytTqYw9SGsTDhYMPmXUEsoY%2FYrMsAtbu2M0QgOzGqyHsr0OJ8z7Xv2zfggo2SMytRDktVYxXkWe1w3Z0RPITudfB7JgWdYs7pPza4%2B75EyJkJVDrhw1yRVTr2oedc1ANewyMC0cdwsDDBf24TK1JECwtAWSi7niJbFXcM3SWHqlg0nU3L1qr3c0MK8iBSynd%2BM52dLK7fOYplKB4Ht9dKP9VF9Xyeh6w%2FZYa7JZDPeXRVGtNoxexA%2FSEChRXCMOe7ABXUh4tyVmzCgFBxR5pVhLcx6CjKlFP05jHVGuckKxp8XfhfFph5ATb5Z20d4Df7z1F9G8Nse%2BaL8bkerzpyzaCBJGKTO8cOxiqRdOyKe2acv%2FVQT1SLf2iGirOF4LqQlHsTYWhEQEmEmOu0QAbWb%2BYssOVwFXhT3wrLYER49EeYT0f4MgKBQ3Uc0MJmRrMIGOqUBDS2bQIBbmhiJALgoiVNyVNTPnQq0%2FGDFDS61chFZOI201lZ3oBA%2FGLGIhl7Nl9dnA%2FLMQegtwACkal%2BE9J1vX80Qp3rk0h3KWDIxul9ysgo%2FE8Pcqj61Vx2a%2BzQBuN7it3ZCLWrTAIYvtft%2FuWfCc6UfUtOgY%2BJzNkuOO%2FY1o9JHoPab5iqzg9ItbRsHK9A2flCB0%2Fin71l%2B73J1dmUAdHaYT5J6&X-Amz-Signature=c6876a1abfa9a9b95ba045c9c261d6ae64210408d0dce02714f316854fbac58c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
