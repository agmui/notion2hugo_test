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
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT3H7R64%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQClTviZjZBvjRWaIDLaQNQ6F9KQSFs054A4cPkKTNcvogIhANz%2FYmt40ZRkXRXh4QQKSapq2vtAQ0h4k2lBaiPuzlnRKv8DCBsQABoMNjM3NDIzMTgzODA1IgwyU2%2Fsoc2SpMWJ8T4q3APiGMMmLKC2UMQKb9CwX%2Fab6wrhQrsPDrVPn%2BKUk0EHAPQW3Rk33oHm5NJ1YOj%2Fq%2FIZFR%2FUffAalCOco4d9zhrXEwgz7qOxriy3fe4jzL1%2FK0Z8CdCe5HNCvzGCzErTMhCD1QodVlFfIAMeD5NKi%2B7JzbxNPtcXVxC%2BFlYJl9HjiXaQjMXdB1shGejB717Y7HZcsidx6dmI70Hl4m4%2BfQHsjjQdhJBt4nr5QU8RxBalVcO%2F%2BpoCwBCEY5bXGosPF8ZPx0qXkFJdOZfLfJn71EFoHqSWQaAxOA6wd7rMJHo7ipbrDbIDtGqgRPhFp3xgkYx8Y2hip%2FGngx6AQ595skXeTmrWtuqWq87pLfCs8oOUU4PLAInTxDdujlv5BtBJMGaq3t2fXb4k5IvbBhDrKnZHtVxTFFQLcfQ5crcmU9HSZOVsGLB38cuR2CE8BIzswpV%2BQOdW05prOKMXcRMSa%2FbTr9S7lp0tp1yqY%2BZTjhzmFgXD282NFF4j3Omyc4v3buqbmNuRhLjnzKRmEqkgtQ4kOQe6JStwMHGzhL0Mxp1KnMCrW9y4TQE3VkKY67K5NnLP%2BjryzlZq9kgzQc80haeraZHVba2Ec4XcI4ocHeY28rDNiKGge7y3uDaZsDC2lsjBBjqkARekf0Ba1mn5LTle5DXZRkTgGYBfTTecwCpo6HmQr7h1pAbXTv6bAjoKf6NOrCjqSCwP9P9qbo%2FrGZOxEaGLBNP8OYKDjyKdo7XH1WjVzdFFx9Y%2FCUOFr2gftoIt3qnxlExMETiQSkYzMCzPSdemaWQ%2BvLbKaAaNrd7t3JKAuYsyyppTtteGUOFv7tUm9s3VG8IZunRdCH5PE4KzTmjBI3gowcIt&X-Amz-Signature=e71805dc7a79e5f8e5df6ad8056a40ea3ccf990b9eeed0a93528d1d6bfb27d13&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
