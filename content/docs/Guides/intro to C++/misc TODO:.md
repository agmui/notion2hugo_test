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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JLRFJIJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDVAy%2FxJPrY4OKg0cNxRceiL9KTAGakjEfFMvZxIFNGEwIhAOdt1HXsRM28zB8R%2BIcjQRM7tEiIIKn589B1O58Hbh2rKv8DCD8QABoMNjM3NDIzMTgzODA1Igy2%2BafwrrYGTFDgPUAq3APhpjNKSZ1%2BFOd1MJw3sVNrSHY8xlssvxqw6lEdTCbF6oLvnLMBka1CtmI2jfA0Mzenu6zYFCJWtz8kRRnH7Z2FSVF%2BeECQeLjyTZPfbsikuJCok9l62918zdtUXq%2F1WCT0OlGliYRnQkoH0WBe%2FjoXQXGI68z9%2BmCCC%2FsSK2MmSKxEGk%2FrpXkdut5fg%2BW%2Br3eJGwjKbLRl6KS%2F0bIs%2FVp6lJlOyZ9CwPwGoB42vIugWWTfyTMxCZb%2BF3Q0XBPiXE%2BsQrE%2Bmhl07CMHz9EfD8jmgCikmV8PXW35QrHInMQGUgBqkV7HD9Bcy0qGtYeOBP2Muzn4eeM0Z7NBjKwkD2dtje1AikAU6PS0bg5rzWOSkCeLZAP51yn8sVsMXErjFg7%2FIzunpro0ggo%2FrCFWt%2BikFP9DWzmiUngwXAK9PqqPa2LfDc11TR3J46T8lcyvsYep52f93rwOOSlOutLr15MG11F72PJvea20SEdcGzMOeR6ivHdgndB3nhEL80vw70vo5NVXH%2FUUVss87J7NqEKOfBzC6sz8vsjHh7o5GvgG%2BgTO1OIhNNbi%2BGOgdRO8WGI8hCOKOT301THrVv9W4yn1CAXdufCQztLDMWzqiRiq3qz7zwXv17yx7RvIUDDjwIzEBjqkAeEKXbfxukLpRqnFJ6GIeJzmf4UVra9%2FjVvEeDsGVG1ai8Ciw0kGSTDFi3UPDS%2FxhyGruBco74QLQ4zSdv9Ll4uDcbIFXeURvNAG6ca1ci00HXj0JCCvNk0m6m8mWQZvvSh96ImsUr5DvwO5Xq%2BJp7xDHM6f7lERaY2Pb6PbnaANf1XdgD2%2BMXShC6Ssd044pK4Y6ATGCEBclgngPqC4dpNvm%2FYi&X-Amz-Signature=8544fd3a94bb0ef38c52a5144c699f5c22a48c015996ac840bd9ec330bfc3447&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JLRFJIJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDVAy%2FxJPrY4OKg0cNxRceiL9KTAGakjEfFMvZxIFNGEwIhAOdt1HXsRM28zB8R%2BIcjQRM7tEiIIKn589B1O58Hbh2rKv8DCD8QABoMNjM3NDIzMTgzODA1Igy2%2BafwrrYGTFDgPUAq3APhpjNKSZ1%2BFOd1MJw3sVNrSHY8xlssvxqw6lEdTCbF6oLvnLMBka1CtmI2jfA0Mzenu6zYFCJWtz8kRRnH7Z2FSVF%2BeECQeLjyTZPfbsikuJCok9l62918zdtUXq%2F1WCT0OlGliYRnQkoH0WBe%2FjoXQXGI68z9%2BmCCC%2FsSK2MmSKxEGk%2FrpXkdut5fg%2BW%2Br3eJGwjKbLRl6KS%2F0bIs%2FVp6lJlOyZ9CwPwGoB42vIugWWTfyTMxCZb%2BF3Q0XBPiXE%2BsQrE%2Bmhl07CMHz9EfD8jmgCikmV8PXW35QrHInMQGUgBqkV7HD9Bcy0qGtYeOBP2Muzn4eeM0Z7NBjKwkD2dtje1AikAU6PS0bg5rzWOSkCeLZAP51yn8sVsMXErjFg7%2FIzunpro0ggo%2FrCFWt%2BikFP9DWzmiUngwXAK9PqqPa2LfDc11TR3J46T8lcyvsYep52f93rwOOSlOutLr15MG11F72PJvea20SEdcGzMOeR6ivHdgndB3nhEL80vw70vo5NVXH%2FUUVss87J7NqEKOfBzC6sz8vsjHh7o5GvgG%2BgTO1OIhNNbi%2BGOgdRO8WGI8hCOKOT301THrVv9W4yn1CAXdufCQztLDMWzqiRiq3qz7zwXv17yx7RvIUDDjwIzEBjqkAeEKXbfxukLpRqnFJ6GIeJzmf4UVra9%2FjVvEeDsGVG1ai8Ciw0kGSTDFi3UPDS%2FxhyGruBco74QLQ4zSdv9Ll4uDcbIFXeURvNAG6ca1ci00HXj0JCCvNk0m6m8mWQZvvSh96ImsUr5DvwO5Xq%2BJp7xDHM6f7lERaY2Pb6PbnaANf1XdgD2%2BMXShC6Ssd044pK4Y6ATGCEBclgngPqC4dpNvm%2FYi&X-Amz-Signature=2e143768cc6ffa158d1c6510a64a88198e80dbcaebd6e11255b7b3bfcc41d71d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
