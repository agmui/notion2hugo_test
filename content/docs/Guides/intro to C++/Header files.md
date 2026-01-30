---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

</details>



`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHZLECVK%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIER0mcIKDAR4gvuN9GeJtPKpLgVCF9FEyiSdoWcVO9eYAiBgegyrKTv3TeKEID5qhOjvHbXeWQbc2wQFv8o1ENMZxSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOZYklxSbHlWkH%2Bv4KtwD5K6%2Bk1fcc5Ft%2BrZfnZjWlvmWYG9iSleEC1O3F4BfA3pv1PACgymM5tgoMjjd1HLJw2BaS6OkvbUb8zTW8FeXbquun%2Fp0E1qX5OyJtG1Xc82w6kJ7ATtuiaDibwsOdjH3whd3Tg2l4wlep799geCbCUNdWMDx605SXICOxRnbMJvyepB2u8O8JINOMk4LdqazQsLsnV0FbpwD1FMWMoa09qr%2FgCHpBQzZoegcDzn5leHT1pYovCv9k8p24u38I4GXb6IajS2t7g7mXS4gP8qsxsHVfsuYP5Yu3OiB%2BkRGTLGCOhIXUuKz0XwuPpfA4vXWjrBgQKcqweecx71kNNB1ma1Qhbylm1kQPLoEx2gzoYQzU8XX9G%2Fsnj3OmclW%2BHhnkNdDhtqvJ2wHr3hltq4HAw7lzuoveY6OqMhBgrPatJlQ8%2FScg8audYyc35R9a89Oc0OuobJTo0OhcDthJOoYXQGVgiFjFiA%2BAJ0YyBr%2F89Kb1yQNOqeFH1mVrYBqX%2BuxMdb9Xm7uS3cW15IisqaJ4%2FGUqldxgeDtoIdfJOccldfNX4ioC0qzdTZdVIWaItBDE8G6YFta7g4l%2BXMWcrv3vtB5ch6jlePr6nmIFsNraZXIovX3hdE%2F%2Fcup10ww%2FYHwywY6pgFo9inqqIndtdxy2%2BXCC73jGTT1NhWNvqhGzdQJy0e4FRNDZgy9FxrRT40pnkU0IQbNlhETbwheJo5wEf6Lt05HHiQ87ebdebp%2FjKYJYXkT%2FPOXyTcD55JYpIqkL1pjcEs9aJ7NnzKryJ3Cq1Ds2N7JO87ykMWwoa8hD4en0GgdFOLgfqkjS1FSOlQYGUfFSkiJ1jL3Zb9BeSudTHvryaByvWEcbmB%2F&X-Amz-Signature=fd58d2570de5ba0b50200a6bf418371ba9ea4c8d9aef22297bf353d82ab3e380&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
