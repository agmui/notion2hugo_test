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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBR37MM6%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJkJqqeateom5RgQrUZ7Xygzhm8qXn7OyGI36asqNNgwIhAOGcuaEWy1kJfd6oQwn9KsGSb%2FbFa3jFcaIPxcR9DksAKv8DCDoQABoMNjM3NDIzMTgzODA1IgwIKqgGSrtIHE%2BD7Vwq3AMyYR68TrHIcjpoJ5XcgMc5srYczSTid%2Fl%2F9%2FLgLRzHEb4qX5C2pQ3fg0xjR1OiGyYfab%2FQ1lYeVtyFF5ezL6rucGPtESFDuy1tFi3OUegpY27QtraqG3pmzLkrkZFMkDS06M%2BI%2FCU2Ym0tthqZJLPLDG1RrqZP13%2BnTVniWuTmSPtFmuTa53fEV6GjJEMeHCAkIhWB4hmf6bFKazZRWmh%2Fd3nuCBgalfT1zxI222J2%2B%2FTYIVz7rVKzAl5uaYUzf8vZXdMtsnW9gPXezKXjOcjOQ8Yl22EMwKaJaqmmj%2B6EA1A2pRbacP2XbB7kROuwPf%2BwdUxILnjgLR9ieca%2BCZfPtyrJ9anODGLb7azg9qoiMfxV4ePA8Z%2Fh1Qj53pUTw3pnQk2q46qaPLS656oq33rPJxooRxKUt1290uFr3Nj3couS1gGJEhpH8lS6cEvCf5FB1quARjtD09nRPKDporGY8a7DLE%2F3CO70LqVPV4iR6gl9cNbEWFYgjLs4D7CNMfcMxrk0%2BDM%2BHjKGdSzPNGi3fOZOl47CD61RSkXttGs9cyd%2BDqmBTRVBCDlGItGKgPswK1qDhYGgsDHDmr8kBLJq%2B%2B2SkRTkugobMKYldK%2FiGVE5JMMidIKs6Na5EzDc7%2BXHBjqkAWB2jeyD2Tnc0iHcTqWftaF85LvsHhmI7SezAQ4Ov1ZXI3v0UYsmt9eAOKodQP1gg2JrsxlOj%2Fqvwazb8O1qqd%2FbRuPcgE1D%2FxUN3Tpsf08eYZ%2Bgr%2Bwwaax197BxB7s7rd9hv%2Fc%2F0qD1GyUREsYPTplVbrtEN1%2Byr6taScFaMb3QGCfJyEHqzzKbQ0Ru79dXJA5ac3zXP4nPPeeT%2FCuPFcRxWNfx&X-Amz-Signature=4ee61d5a5431a64f5d00098e890135dbec0c1c4f874d68f1b81a5d4960d9b717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
