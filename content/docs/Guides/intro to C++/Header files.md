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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLEGQYEB%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDpJqwejxEeFW0ezRtCY0PZGTkOVfqosDcVzVWgUMylngIgaFRezTZwonxHRBvK233aC9ktB%2FgDoSJ3jCsOUN0rjmcqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZAYxAfHM8G8ZgZzSrcA0I%2BYXhLkPCqE8HT%2BPVutXB7FLf5JxRe9Cn%2FiHl7Er8lOmeza2W2ER7fKgFTpN73KcK8kITpex1On5SvMfljp5tpXR8Dm6DrODusBNHXmUSTiCuJRkWhv6Da24iIDDwCzpxJc9TkmXspODZjv1tbF9Wu1piAvVdzqx72ugsfywg6YxHlb1XPjKeRrkfEDdefqsmreurfmaQ5LHLL%2BhKX32Z%2F3o%2BIRQDviqgc5Mo9RUkdM72uXZjwPcHELj8M3SKQWfC8yhrQt9ae0bYzxpxnwiYTVSJtCR0%2FOgiRiJ05bQHnlMupyXK4UfxMxOutOETRKelkTtIdXjh1yxBa6eK6ZTvRLHe5EVzUKSn2MJJ5ubebZxnRQ9g04dPGwJHYCKYbXQAAFoEjkGsRm%2BRrXBogn%2BtiKcbUdmrP9SedIr%2F7HVpiGmnMJ7rn9FpdwskukALrgZoWUgdKYZw%2FkGOuxOnk%2Bjl9AWZFcxE051s%2FlK2UpiQtuoKAFt%2FD6K9GCbeJomKVepaw59m5S19IM%2B7KJPKlPcM6rvTpaWf5lLejz5YKobtNlfXfAD%2B5tI6S%2FKMyirc05bf8JsiP7BAYaOHe8f5HVWwIf%2Bobu6r3ICgDB5ua6uMczfMD4F2uKPILlqETMJz34L8GOqUBno%2FzNEkdcDY%2FH5uDxv3sqLEXswhmNPjF8hV9fmxIkHUqO4sT8CnluvZti1iFYM5jqJqHhm2YGdRUYX48xduWinJ4wV3j2bgUVgaMCHXfRhFep2ellNruEJofCEpGQfjTlB4ubRNgSDROZow7mSrf%2FuYslnCp9PmxpiDAvT8cjayuhzs8EqDdsZ%2FbnlsmYeHAD3DcqOk4WiXW8rhVTUK%2FRgeghtxm&X-Amz-Signature=f8c38cea0d0689561b74a6433de51473e1641a78ad2e29bdeab56e099fdbc896&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
