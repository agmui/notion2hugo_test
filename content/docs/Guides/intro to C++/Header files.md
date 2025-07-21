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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRA3SCVU%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuugSs03OYS5AAS3%2BUK6m58%2FlkX9yNyiGc9t5TnFgzTAiBndB3G08%2F2KtS3%2FI73hVKmLTL%2BSMumxezCJ9zrzufvbCqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJh0%2BThe0zDjFBWF4KtwD0OEU0QYMcxj%2B%2BOSa%2BzZE2ZLZOPFjkYoJ2INAkg1GDO5aM37aEmlZHnr%2FAX4yJd4I5T8EUQLAIOBfL1rATSoQvAWVnD8PMZuYiMooOeceZTAhY%2B5pLV6gLELGYfug7NVzksiUa45MHL6dUT5mQjNVmVJHVfXR4rfHF506f3kRBNaN%2B72unLrKco48cNmGj98CdcpHPQ6kMAATLpq1WfBBiZAYTp1k%2BeqOKEuEz2bxFlkenByEQfK%2BiKvxFEuqmleild%2FGhOrvcYPWifK0ycvwUMzShjCL8rXq4FjJQsGrA2ee0i%2BS74zaDB3Y4ifqZT%2FDEbf2QUsk9OximCcH%2F%2F8vIFwRrLasY4HCbVMuzDxAFs0UiQDCMEYL88v4MQg17UcMMVSMP9wsaYsVIP0ztxAMZWUfOMaE6QGnYCFtM8MAJKv6VblkhdHuCj2c4boEfo5%2BkIpMxwI582o3t%2FW5hu8dSUTWjuWs%2BSM%2BIwcq6L73uqTMHGGefGWq2m5Ay%2FkgwhBFW4GhqX8JeTwNSlzTcqp6pEMBHWan5qK6AcQ%2BJgRbyuS8ozYwzXiDTkma%2FZAchyEa0bYkI21ywvxqxI3DJe6MKvxyaug4leIfL9UrPQvEF1SzwDRchAg1JUFDGq0w%2FZ75wwY6pgG6S2z1xzXXqhXdiqaFBPgDUG3i%2BJ3l6Hzc0ICGdr0%2F0vdXEqmaVPRIVkStMSxnrQ%2B7GgeW%2BOslAOaLDYUmVYacUftP7by%2BngsYsv5n6jSeQ%2FJpiw3RXMwG7gJWuSrprRPjAMJ%2BqzAjaNhCGHpXiwpaH7dbaS5Ur3GB4rovpLXKHrk4%2FUTInVYIY3I7C3qy8l%2FQu7wuZ2bkRwnKP7Od9GFJSBdDUNq%2B&X-Amz-Signature=692177e78ccd887b5663944202800b90c1b95e2b7a31e33398d311fac05caee0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
