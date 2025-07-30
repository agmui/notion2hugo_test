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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KT3NZUX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ8fehciUbLrKjoOjUauaPhJcKBDi0HdpI%2FtJrMl1UTgIgUrwllOyrz5NSiyytr4fVwFQcftnh3irxodz%2Fo80aW84qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBX%2Fk9RH0FnMfSDXHyrcAzGkE2aUVJoMH2ohz1LHBenodD0hpY3DwS7FQof1EmNy0ZY3gAGjVmLyV3dYroHmWCr2rCSRcaVW%2FVZ48Gcka%2B2WIvEBby7KWnwQdXgPK7e4M3YK0sMndaxdMyLXIMd9EH82jInbmoVyyz%2F9QSuGGdvyjA5rJxNzX66oULoTwa7MJ7n7GjoKAjEEBTm%2Fe1MOnsMGRs7PF5YvOp7QEawvC4yCz2l6igjNSMHhWAATHb%2BDyvLnOPMovy%2BW66FbjvapVHPjSxtkQnCRMP7khQEJDp14tXZoUO1RVxNCRJ6r6MNtjXMUsvOX1IDPJBzrZEIB2I%2Bv5giLiveHWHK5ZFhzxBd5vAEad0160qaBH9uolIecUirE7%2BIARLqWm0xfJZyaJx5F8KxBkIzvBTYMi2dS5mUbdsxyfQ9XbSjZHVn%2BB94p%2BYyhXkXXSdDa6sgs7NHCt%2FBAgISjk%2BilKWwqF7TKFgyxaI9DWk9t8nRA%2BEDfKrO4izP2qXTQqWThV3QJ1sUhBckiKUl3R%2F8pqz4B3KybMpINxkaD6NQvklcWji2dzj2I%2Bgi6GILkxTKKcXn3%2BN0BX9gpgxjWM8eNszD%2BBQmy%2ByIRDIzOn9IvWDUidfsySIWRLD05ZHtw5jjS0ZdwMPeiqMQGOqUBZsOWV%2BYHVFECk6BEZqX6ZR27%2F53VMntJ%2FRrV2ohj%2BO7rWWlaWMgGZjO%2FsvVN%2BRgmPOo%2FwVIwYotSntEYXOstQGNAhZCDnTYibSevHr1T7sJKImWLKdnGZ8LZxDcWjfsVhblVpOH%2B1EogopAQfoz0WTfltvDZjQCI%2F5RE7WkjWJSN5Qgn123VJW4tC8sztpkNIgHnWjNna85b%2FuxkHbSpg9Ga59cs&X-Amz-Signature=da9e30eb44dbb5ae3293f11bc10c43e2ed1d339edea68777ebbd81819957bdc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
