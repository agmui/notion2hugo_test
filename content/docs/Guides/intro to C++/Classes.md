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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV6E3DM5%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWirl%2FdAkOGL5HYSKHMbXSBz4%2BjdB5zqBUJA1rrm4dqAiEAxer9gZdl1dSB0uZ8h4rlQulPpaocHFObpV4wMLVV7c4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDK4BkZqjQnDkq%2BR09SrcAzB7o9mgfH9WK4nOx4CJUHmTUboOTIlW%2FSDE4iIT%2F5xnhoPi8ss9%2FMUqH%2Bm%2B2E3lDSmbrAQlpKewUc2qb4C0W9lsKDA%2BnVxUwMKQeH1PVRvpCv763%2BUxzKPhms2AqFn6UKGH7ZNSYm7%2FQLofIUue%2FsIiX3IVjJWO2OXGfO32QNq1bSpMRRK91I%2BEu45kYRHU6OVSj7WRfVyDSeUxZHTV7O1MuzliEV2YsmDooRTDVqJ895Q21%2Fpg1r7BUmFTbf3fTixettnhHXOv2Xqot5kh4qqRyWGVc0whPgEuDEToahe0JPWR7b3dNQzGgXALLPzGNlSaghtrvZ5PMd3BRU%2Fw51y0WdomfJbvwI3Jr5GuptXMxwaJ%2F0MvDLY4Pb0Zy%2FPplGMA1K1k%2Fvji5vxoK6H8FON3f1PvPj4fdMO%2BFJqPD7TNv%2BedNTYXEMdD9UpvilznH5WA5qb22rSuiXYVBYDWx1Yj5hoSKT6Pw%2BRaqwcMVFdwxC7kp7uKkiZfj9Q%2FQ7gLqkuCmZcNOz2teZkSnpZSglO5l1yY9oZU46s4O1XA%2BgGVG%2B2lX7bIZpwJnVNqohPDuGN36WYB6TRkv0nKhrRtfYV%2F%2FmK6jGpqLcJkvS2v1Xya1ejxgAlGOVAxxLIPMPXF3MEGOqUBcuETm0ha%2Bq2Plqkh662CJ8O0JoH5ZfLNNgWRCRfMTuV8QDF8k0ouaOnFB3JIFrodxCQBkp2JabFU93FAkJX8nYCnkzbay9CnxYoJUcsMfAsv%2BAeJYJSbQ1uSnVYVK60QLxJcuClUZDcXyO%2BEoUnAMC29ky2XreuImgOa325leS1UtyweiVGV7bllll0gCaKra6XYGdwFK%2BkeLbRCS1liX8VKw8RU&X-Amz-Signature=b58318005bf6b86139928d485064459c4f7af041a4c5533e5e409a03053483dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
