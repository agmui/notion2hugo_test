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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466362CTUL2%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCICFRl%2BJG7FRORe03%2Fezz6dEo9ZraWLBXbiafm%2ByX5E2cAiB%2B2IKSdPL50pCDjeJgt8QSiuMAqseRcwF8pRwrDQjJ1SqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiw6M5bU0GRs%2FnM4CKtwDE2zZIeCBSTCyvDFdxfDDPYJbxN2DijNHwedBXo9tEoSSQZoD%2BsgqRClb3Os3F8VSPbzZQ12hj%2BZGtAKSTyq3YSvfafBXSqxfXVi4iC97I6WbD4Iy1BwFwcIRXxem6OUtCfv68C6YnGzzG0jpOWB4ibDzqAvVDiwMlsXQ9%2FiXoSSPSaIYvK0G2r7m%2BFuIze7%2FBBL6gPoO%2FXcqk%2BuN3pqIQhcGDRru0XMYay%2B4nvD0Op%2BxQvoMhkjLMajSkdZjufzKN5wW8rFCVOXUeb5hwJnX4f%2F4elSKLHdaBfjWMNf91uLCAbGNvr9iu5Fn22Ldz8gWpv9yPvSFfkD4ZR%2BhTjEj9%2FiUai6dsGX0dfzpEcOXu00OecO8mqBHA7XgX%2FVr5n4zjlEtR3hl%2F7lvhWMRusdt7CYKJ2qvJz%2Bh50sqeTQVfUe18cGfurlDCe%2BTVSOXeyhCwjRdqaXnDu1CZxRQcJNjbTrWFqasj3LBXF3MMEgJMOK7%2Bvok6YDczsZRCL%2FTWdL7RTmFsoKG398%2BIBWygW3NZVoxiKopKdCUFRMUDgf90YECX2IVPUcQ8XScIffcZoGvzqA46GB3db1NkyDjMkGO0DbRdLBwzrBKzqqmd8qqWQg4cyNUXc8sia8pbB0woNKz1AY6pgHJDJ6rzayTltIVJTn6TwwQpBes%2BDL%2BaoIdP2DOZmYuW6XkfZmHf%2Bco2Vs%2B5lyQRWvMOzsa0HaPnmWE22fwhAlTtgVR69y1Gid4ayKdX4l8cii38RoU4twM1bS5MUmsPKJEaMiyEHpcdj8Ox4ugREAs2O98rigEJOz0i8J2VFm%2FdOhnzlH5ssoH%2Bq4oHev7z40ghhM%2BpEDVfecB0HvV6ORZGFmceMhG&X-Amz-Signature=d90a56c8c97756e9b07d08fbdce65fb5adef8624b59784ce63fd9fb26ce4d004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
