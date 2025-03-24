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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UZNZFSU%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClCcT1txPHJi6fUifaulOpCYw3qJbvz90OAFHOKSxDDAiEApC%2FErDd8JE7ZhAlaeukJTmn8F3SwAZDMW3L2G15%2FiyYqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjThUThNYrVPIcR9ircA80w3iRPRtbQxjj4cI0UlpydhwFtx1Z71oT8G%2Fist6VeaQd7h0Q4OOovJnlXYiRTsnrW8CYvDrsB1Pj1o53dJaCaTP9cDVWS%2Bg1hHKhyKWv%2FVA60kHAk5u92aDc%2F7BJDD2I8Bc619KzKkMsVdt7a07%2FQxqWeSI9icEHeYkGC9gUV3QT0pUm0xFBS0VqbCXXUC1nUE0CpJpd5VEWUImrgCfzc2qgoBKULixKEDYt2ZMJAac8%2F6kpw3Mzun6s3KwjCRK1qbILS%2BU1TGn4McWrlUbhSNZYie96Jh2Oaht583AH7LmFwRJSrFWEM54%2FLIJMMc%2FMrHn90R6ydLX9v97Xlll0oGKzJ4H%2Bj%2BKZANbCCpOoaOvALQsnXcS6QkIU40LZcoQubSz9X4x12%2BK4WUM3uEARhyzwNrSGgkPmp6klA0akDy%2FYNYMs%2FUrjSwPaXqu3SmI0mpXyz2LeanF7XP1hd3F8JmiCQoeDUVXSrh06eqyNfK0BVJUpnUg9CZKBSUChxPZdCPDZd%2F%2FoNQOOnJx8KFAiYWKO429U0QU53cl7dXTWk5wkBnZQbQFWtEchKt4F3ujr3NhvgULUhoeD%2FiEiKQFlVnY%2Ffv4eaqwDE2C5iNzgbqFmeSBkG1cJkhAhGMMuxgr8GOqUBZBUHJheO%2BoDNaCaGTSgOXyjSIX41aH4GMYLH6Ki9A7e4vrKwsLoS%2BNCxyKkYAX%2BOsrOHr2Ra4FUrzGE%2F1GgVH9SYVGqtfvVx1%2FdesbkIfPt9l6GbTYBFSAMF4sKhBLbSyATgBXLHoZiKYtewHqykxzvjz3mg3IgWLzmiKrgAvlZdHHGhTIk%2BTi%2BZZU9Cr%2BnPyTp3DpcOZiCb3SwMNVMFUDYIn0e9&X-Amz-Signature=2f0410ddcc37adece741b6c7edd98f93a62f147ee99154d8e9e3be4103152fe3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
