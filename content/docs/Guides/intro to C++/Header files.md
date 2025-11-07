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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM4UJ23L%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW%2BVEBhD1MGofqUnN1XG3TKQSpAbfrOvx5VXF1mZtxpgIhAPdJiavdnZkHghA5hPjDiPt98jkjQETWV%2FrOmXxwJOy9KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAd%2F1mFFdWfSFQldcq3AORwbitmnbu9RUbHVEFsPQVb3YMGT0bFFCq1TFPFjXfolzVHxsj9eXAVcat2AB%2FCI0qQjgc89ry0rK0ivOQyDuTcuTHYraW9bImZdde9JUdjt6qRmiIjoUp0j7Lxl05ZPiQFYJkcJuwnuaph9vMEbhmp6O%2FLySN6VXt9eJCeuk3NcJebe9ll%2Fzkmf6%2Fh6R6K6YLZsS8hEtW82ZWiRVTuzL3ky32wH%2BMZKZ5R5wOz8jJ5rkrfHrw6%2Bejg1XC0ZKp9TOVLVWT85vO9VUF2iEXNhnmzTruxo49PyXU9RAI77oRqgP2r5J%2FW3YYc9VMmf7pdz%2BvNY2UMT5IAd3EvNAZWhzd%2BBcgmvwzsVMR%2FsqGA2k%2FdbUMEQxIRWuf4EOakI3HecgpkeogSb3V1B9Axfw6mScw51C03EIcfzdRnKgqqm3dk6gbT5MHCVYNsl1%2F2R5pBRXnOZ7rw8LHe8vFw8SyV%2F5NqLHCQwAnfZo7h8NK8Ikli%2BlnIHrWvuF%2BH5fLie7bstfe7MbaPD8gWMpp9NxAM3bzp5NhsvqQxuvPUJ1FQkidjbFS6qWhtrDhRhmZJ%2BnCbnMwYpIIWR7WXBBJJJXPtl8WgVbevJBRbw%2Bxa9Ke19XGv5aZxJk0BKX8gJmzGTC9lrXIBjqkARKRb2%2FvtW4Rv%2Bd%2BjhtCT7CxE0JWqUYdf3qXZPR0ZL1IUjbDt94nreq98mvm2ymgql6Jtau%2Btc9CYECwETSpT7qtvQR2Y9QcztnEGAFOxOWGxpyrrtr8T1zwZumtonl8Ln4a%2FAWisnSfdj2XLtSp1ZTu5rf3EHwwJd40Fe1dfD9Wkd6nzR1JuCzs7rA03bsGBVnk23EP2S1MPfAIY0AwQtyzFtiw&X-Amz-Signature=5ed0a1197474c408492451d32dc2d048983dbf211cc34293c5f22a933f93ee94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
