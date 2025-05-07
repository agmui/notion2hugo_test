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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PBLEHZ6%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICF9fvJS0Z1TEp87au9CNZwhjEJBHq1xXC78ejMYiX8%2BAiAugwXtFsrlN9Cq37f5h0dEf1h4xqRPjo9l1yuKutcA0ir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMvtCET537wKzqtCmCKtwDbJ0EOowpkxjoTwTOwIp88JTak2omP09iO6XMUgnQYVC3glovelrngZIaTNXZEoN7QWVksgF4w4cdm2818yzyx2hDFucyu38B4kfNxYABS%2Fmkw24gKYZB12Evh58EjgxJxFCUcVDokdDrGx5IrbVa%2BFRBoBKaxYZjsTkWdk6Uv4SRLuNgEti%2FILXxpnN9XdA4i3dkwW4a7RWAVv6tHxnhh9c1jHR2DkYTuUSgYL3izeNqkdjhnoNWkVu2ry%2Bmka6PGpySlmASps6XBqIKVDpjibqzkujk2Hxzz3SNyfWhuEvKTyRw9R9E1dYZKJ6akn9B0JvQkt6qSS7WkboPFeIacwzpOm92fzpJfDy0wgtULIed5sZbhbtNfruiGFGhfEU0To7Q2m68CMxywd6k0XELU3RTZyeHvb5YJjPvY3Gkw9YxK%2BEtxobF2hSAjCPosYAXnupa0kDXELoawd6Ih70grFW3r%2BHkT0G0GBCLNe5OaQB91NUp15FXy2%2FiAuIpMTQDOX8jYtfOY3P2WdWdDi9VScoXQi6dEnJbvL%2BFUQ2Zda4CfEKQLEdR3Pe4Xdmp6fXmWK8fDEjshu%2FjfbCwzLLD%2FjO7pV5W3m5D0PMEjZco96Tghjvjfycjqa5QUbowoOnswAY6pgGtoNkld8bujMYS%2F%2BZzo85ztV72dakv6TznjaihA0cQkq6cc016Swzugam4WoLqF0%2FbxhgHytz%2F8MCDidUDbC3x2ARWXt%2BA9NfotIoroKzmHi2gL%2BrMPeInIdY%2FkNIwe%2FX4WUnxMrk6KPG%2BOCD1yh7FaJZ8kgZH4qQ94vLg5WrjvMuetVGdXivtV%2F8Ps9PLnxUeLBVNjyPq9glPf72keEYQuvnDjhPN&X-Amz-Signature=21aa7eec001ae46ba481464fdd8abb2872f436a021486dec7d5c6bf402ceafc8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PBLEHZ6%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICF9fvJS0Z1TEp87au9CNZwhjEJBHq1xXC78ejMYiX8%2BAiAugwXtFsrlN9Cq37f5h0dEf1h4xqRPjo9l1yuKutcA0ir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMvtCET537wKzqtCmCKtwDbJ0EOowpkxjoTwTOwIp88JTak2omP09iO6XMUgnQYVC3glovelrngZIaTNXZEoN7QWVksgF4w4cdm2818yzyx2hDFucyu38B4kfNxYABS%2Fmkw24gKYZB12Evh58EjgxJxFCUcVDokdDrGx5IrbVa%2BFRBoBKaxYZjsTkWdk6Uv4SRLuNgEti%2FILXxpnN9XdA4i3dkwW4a7RWAVv6tHxnhh9c1jHR2DkYTuUSgYL3izeNqkdjhnoNWkVu2ry%2Bmka6PGpySlmASps6XBqIKVDpjibqzkujk2Hxzz3SNyfWhuEvKTyRw9R9E1dYZKJ6akn9B0JvQkt6qSS7WkboPFeIacwzpOm92fzpJfDy0wgtULIed5sZbhbtNfruiGFGhfEU0To7Q2m68CMxywd6k0XELU3RTZyeHvb5YJjPvY3Gkw9YxK%2BEtxobF2hSAjCPosYAXnupa0kDXELoawd6Ih70grFW3r%2BHkT0G0GBCLNe5OaQB91NUp15FXy2%2FiAuIpMTQDOX8jYtfOY3P2WdWdDi9VScoXQi6dEnJbvL%2BFUQ2Zda4CfEKQLEdR3Pe4Xdmp6fXmWK8fDEjshu%2FjfbCwzLLD%2FjO7pV5W3m5D0PMEjZco96Tghjvjfycjqa5QUbowoOnswAY6pgGtoNkld8bujMYS%2F%2BZzo85ztV72dakv6TznjaihA0cQkq6cc016Swzugam4WoLqF0%2FbxhgHytz%2F8MCDidUDbC3x2ARWXt%2BA9NfotIoroKzmHi2gL%2BrMPeInIdY%2FkNIwe%2FX4WUnxMrk6KPG%2BOCD1yh7FaJZ8kgZH4qQ94vLg5WrjvMuetVGdXivtV%2F8Ps9PLnxUeLBVNjyPq9glPf72keEYQuvnDjhPN&X-Amz-Signature=f7fce4862c45ba0e427699f7177ed2951529b890171c3e19a3882e65f69da5eb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
