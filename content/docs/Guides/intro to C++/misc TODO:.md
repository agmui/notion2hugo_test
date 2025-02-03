---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MCWYKMN%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICB1e6XDf9WJiKDyejkKg6lJvdmS9CtuWActhXQ1RP2XAiBPg6zu7gJXT6UcwBG5gknGD2fg%2FuCk3WjBDe%2BB0hRVNir%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMD6txhPQSu7M6ZDVyKtwDyv3pFNqDCuf1c2byDx64DY8SMeQitCi8DSV4iROWiQMKN%2BRWeQErm13vnSTrzSxvlp0ANoeUVmSfq75uNDPD4WBEUc8ysEU8RoRQPwyZpx2bD48sCtb%2BA7LkG0GUeOgs%2BW7%2B5kD1D%2FjnYeDsPZgCt%2FAJN1UpujYBsdnTo8%2FvkfttvFj5DU3Ml95k8Tp1JkTaKMZnO8ZBn%2FZ3EK2K5ZzdEmZdt%2BiR0J823gZ6R1SCH1VnuLeiQ791RQxrHArdA3dPzhk7qqvLMmjSkkCcoHMQRZvaYXizZYyDYqBWBUaNEbNGT8Ecm%2Fcjy1Xf5UAwUaBu2YCeBOBDwQ%2FZupQTgj44kWqvjFVdD%2Bz9Lcjuhr0ngTqxySxNITmzJMPUaHzgDNSqOD%2BRYlygklHlnYLxvxPqS2W%2FHYySj%2BTp4827KNAH2xHx%2FU4FfzzTOAVKoSVJGDAgvVFiTuiUr3dr0%2FPocQzutOfML2OfEKmwD2fpQBpptdRw1Wlt5b80eGOaniBJHIqh3mrQHhrBn%2BHCBBslu%2BjtBRPX6zB7A3CmrixOFcgrO%2B6%2BbILXYC6cju6POgdn24fWjchtuX%2BEVRnbzBR31k4ql4jidQZu9Py%2BsObmga5MW3r80jRZ3VaW5bgwlUYw9I6DvQY6pgGy6BB8FiQ7Ood7IRtu5vumL7zjeODmdmeF3W7pIm6lGWtVU9508OIObtuLRI8ryK1Ja7zNPALuLl1J%2FzM7P8sFREZ1olIWyBRriux8OFcsVkzPC77LvcM1b%2FuSqAw4moNYn6eteGO3lgoDxO9FsvDGU07Ru8YXNVN5HKmqqgghWW%2BLZN5h5FdhtHfqL8%2FIBie4kakteeC1fnAJymyQWLRI9%2F5hmEnC&X-Amz-Signature=cbf12132a54ea25b5b78b2daf37a54162c17aec12cf54236562386e8dd3b5bf8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MCWYKMN%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICB1e6XDf9WJiKDyejkKg6lJvdmS9CtuWActhXQ1RP2XAiBPg6zu7gJXT6UcwBG5gknGD2fg%2FuCk3WjBDe%2BB0hRVNir%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMD6txhPQSu7M6ZDVyKtwDyv3pFNqDCuf1c2byDx64DY8SMeQitCi8DSV4iROWiQMKN%2BRWeQErm13vnSTrzSxvlp0ANoeUVmSfq75uNDPD4WBEUc8ysEU8RoRQPwyZpx2bD48sCtb%2BA7LkG0GUeOgs%2BW7%2B5kD1D%2FjnYeDsPZgCt%2FAJN1UpujYBsdnTo8%2FvkfttvFj5DU3Ml95k8Tp1JkTaKMZnO8ZBn%2FZ3EK2K5ZzdEmZdt%2BiR0J823gZ6R1SCH1VnuLeiQ791RQxrHArdA3dPzhk7qqvLMmjSkkCcoHMQRZvaYXizZYyDYqBWBUaNEbNGT8Ecm%2Fcjy1Xf5UAwUaBu2YCeBOBDwQ%2FZupQTgj44kWqvjFVdD%2Bz9Lcjuhr0ngTqxySxNITmzJMPUaHzgDNSqOD%2BRYlygklHlnYLxvxPqS2W%2FHYySj%2BTp4827KNAH2xHx%2FU4FfzzTOAVKoSVJGDAgvVFiTuiUr3dr0%2FPocQzutOfML2OfEKmwD2fpQBpptdRw1Wlt5b80eGOaniBJHIqh3mrQHhrBn%2BHCBBslu%2BjtBRPX6zB7A3CmrixOFcgrO%2B6%2BbILXYC6cju6POgdn24fWjchtuX%2BEVRnbzBR31k4ql4jidQZu9Py%2BsObmga5MW3r80jRZ3VaW5bgwlUYw9I6DvQY6pgGy6BB8FiQ7Ood7IRtu5vumL7zjeODmdmeF3W7pIm6lGWtVU9508OIObtuLRI8ryK1Ja7zNPALuLl1J%2FzM7P8sFREZ1olIWyBRriux8OFcsVkzPC77LvcM1b%2FuSqAw4moNYn6eteGO3lgoDxO9FsvDGU07Ru8YXNVN5HKmqqgghWW%2BLZN5h5FdhtHfqL8%2FIBie4kakteeC1fnAJymyQWLRI9%2F5hmEnC&X-Amz-Signature=c54d561d36353c522f4ed805c01d6fc4d6ce0461bd75d000be76086debb993ae&X-Amz-SignedHeaders=host&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
