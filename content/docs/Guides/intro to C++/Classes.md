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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC2RISNY%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCF5Tf4dtWf%2FASoE3ESUprX073atxG4h2Q8FZ52jdJZSAIgfztymblasPTZIy5PFvfm96Zu0dbdSSHQp0gDyeNkQ30q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDMpvzHeqQZGzHuYK8ircAzSQioGinF7Fhsojp4xu82%2BJG5h3y59bZnnjT6MSKq33nFZG2NVTqlg6PawJ7yLUrVLR%2BPox3q26XPUgUfHRgJk%2B1E5UfuH7X1q63YLEM2YEWQ6XTQB3hGb%2BcX2OYoQNIePRfq7zyjwlvTqQ9%2Br%2FVjpD6YtdHHHwwzhXECnSl4lKgCljpQuEWVJlxPi323rq0AgDZt8dVnAsoB%2FUWAAqUcNLsLj3BV1tZVCYWBHNvHFde6lxqxDHuLvip8h0Fjvjx%2Bto%2BbLyK0MgFUnTemEKhFytiRA8LyCW6Z0zBWC9Pm6807r9ZjyOP%2F8A46WI5VzfsCZynjjGJM5KaN332Fnj5%2BWqBF0VKl23te3tuyTBC9fBg4wCb%2B34moVY86mMOC0HRq88fYzd11Ib9ifIT5qzpoi0Unl8mZHj5SrmfCffT2MluR5P6xXo7aC8cOlRC6p%2BELXWeucgkNTh7Cxh8M3Z0SB5gC3tmvNchSCEdYc12Sv9id9u6kvzPF0Gvt0CMwBKIlPk%2Bffepjd%2BD15XZ8Hy%2FRsFK3xtQdevTPHAbW0zHBqqx8t%2Bzqcol9nXPe6%2FlujACYAWL%2F74kAz0VzcFn94%2FljPmq5ZNljWQxfFWllctUtIS%2BjghlP9HJWvzztYcMNisx8QGOqUBa8QRSBDVEqA2uvswBZn4oKF8%2Bhs9H18y4KpJOdnQOZSQATx7xt4aB6LC%2BHGhzggde69y5l6doMtdCJRpNrOvh1NUfo%2B09amsC2Xzea3aubTF6XZmkdYrtcG7Gmwb40uIUXV233H69Lipnutl%2FqPvHHndtVWPUjnaNw5ILraxfbG29rRgxKJakNbV7KlPD5CJahLoCKxdLyY%2BiQE4mkNbn6%2FbFBuT&X-Amz-Signature=d5add42f993772d47821f49f908f9f72ffefee07a3b4db6093050f41e03d302b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
