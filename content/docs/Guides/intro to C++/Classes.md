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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHSRZEUH%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYOSQD38w2b58uYAuHaapFktw%2Bv64B9oVCjlDj%2B%2BtJWAIhAJVgnQuP%2FCYt8Rl5WmwSSUPmsj1VbZiirvF8FYjGPChVKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxEF80yAQVeeiIZdYq3ANrPaFzoXnCSlEjzqH5ld3gfeeSIA6%2FPTvt93J%2BIpxTOpcacBuyNB9l659np0CePwfFRtWD9V%2BII2RPP9XzvQg5dtqTY%2FDrX0YUWyrYd0eEs6f1WI7PrYFrxL0XwK%2BhBULYJJBfD44U%2FBe%2FS09MehlZJjIQBtW%2BT5AXBDRQq0230HlIQeKAy8GBXkbidb7oOvtJ370Szylak0v%2BSAmRAGDFwPb%2FDnXnVJv5ZyMmyoMLEVts5V2glxqRkQs1Gg0lmpodbu6pXYbhlrHTO0RncYQs9mTBNYrxjVUrqcI2WtRINWTrBZlxlqd7AD9rcEb5RpUMWEXmpHzlT2Eryrc%2FzKJKJ9Djf8qIOMlsvzQyGPORLBot2%2B0YhgyADHHcd2K%2FFwGqN4C7XyEuL19jQcqA0zBzL1rfyt08qyUx5hk0lesg7OhiXxws7wqEOcSdfA9C5XxHLj9P7VgzuJPCTcT96YQY8iM%2BzG9oRftO2s1RCPFL6IeSb9C%2F8t3nP16R4SOT22apAYcolJ60Pa4X4fph46cehfElmyPuc5jJVluMUIMBZLn2NBGV2TVetdjl3foR2uI0jcB8fqpu8yQjBtNspUpp72GAW0IzNN10Uedf%2FFLLeYey7Ba5GM%2B48jaFITCv4OnIBjqkAcYmL8Rh%2FGt0jFkYVQRZql3kWgU3HIfLXBNVznwC0hs8LN6jqBXal70OFVo5XeZiCCjJXCjq5XdlYyq4l0XXd5H03dizZj0WfWPIgACh1H4i9R5FiXoO8vMJ1P4Ly3eZjKtfQZEhCSUa5MsxtZ2%2FZUyz%2FMRZJiIocn6qo5UJ71lIxY76DVXscvA7g5nWSG16CqIKNPL7OeHeX0ehO0ydcEn0o7R3&X-Amz-Signature=d66f5f3195a2f37cba3f1eca1e5a37ae5f2481b2099ca714b191f0e852c43234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
