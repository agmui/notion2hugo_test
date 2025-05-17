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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUJQA63L%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg%2FNLdEJt7vmiUMKtwMSljwq5QLxD2ATOlWHR5XHACkQIgR%2BDomP6lnPNqlU%2BaiKrZnFN05vSZ4NavNKXixaXe%2BNIq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDPbyhFlXvWv47LP17ircAyhX8nZJCASUTZxMvjiPhZcSLgSeCtCDwI1apVlUUGj1nYSk0jPZNmEGt0rqwzEpHd8FhweKG4A0V3a2r1a26m7b%2FyoloJxhvFQG7LhuC0yj%2FftcK2jl4XcKDgl6K4m%2FZhtzWT%2BPty2d4Y8Z%2Br5uOKL%2FYk5P6qNyl5Jje91hGVtWWZf61p4ovPnR%2Fi389vBO0djE6YDo2W2q6x9QG8VWR5%2BhmVGUAgo8ir%2F1nR546i8hDkWMgA%2BwE0Z33fISOSmJtP8pPtZ6sozghezFhvlQvyRrx%2FV6zfStWBwZ9ctvtFcPGqjDGIGSOpCoqxsIHNnEYU2wTFurAv2aVqlAHJl85bw0F%2BzHLEbV%2BOpOXM%2FF0RybPrbKOoblqlw2V15gV5%2Fi2Js5TnFNncYw1X%2BiCZWVxf7sNTpvz9ZBuZlVRnh6WTAIRneIT9fH7zFOUaO6tM2lz%2F%2FoShyX04ZGRb9qY23ToQavJpod%2BNqy0SrOmLVOTZ2VkVXZ4S0abJvhZdGmp2JNDIx85j95IDUhNVip6d1KSfs%2BSXASc5imkuMn%2BGqZuaBYGriRs5%2BdRrOO42nkVOw%2BHIcCfmtyr4PF9RC0VqemlB3jLViB0G4VRJkaGE8yplVLMnOVWvO9eYotREOkMN73n8EGOqUBUobRyqJ9y5GTsW2LjMtfuXjMpH36bWKnmrBu39h6KFX07TUQTzCvAVBUFRpeEADL6sPJKtnnc0o7c%2FW4haD7kK6mf0YUGrQ6m44lETTdcLTMDUhDoNl8%2F%2Ffj2w2nle31aJB%2F0C5HRqOgi5FogEgYvLlYp2iBNclpb2x1GC72MFBYWVL%2FFsZ3eATbXRQab0hK1u4FmsG6vIA9ExQegJn7p01GPc1y&X-Amz-Signature=35d62a74b5915c274e6dd59d3503b823c63cc003770ffd37c47792316b91993b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUJQA63L%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg%2FNLdEJt7vmiUMKtwMSljwq5QLxD2ATOlWHR5XHACkQIgR%2BDomP6lnPNqlU%2BaiKrZnFN05vSZ4NavNKXixaXe%2BNIq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDPbyhFlXvWv47LP17ircAyhX8nZJCASUTZxMvjiPhZcSLgSeCtCDwI1apVlUUGj1nYSk0jPZNmEGt0rqwzEpHd8FhweKG4A0V3a2r1a26m7b%2FyoloJxhvFQG7LhuC0yj%2FftcK2jl4XcKDgl6K4m%2FZhtzWT%2BPty2d4Y8Z%2Br5uOKL%2FYk5P6qNyl5Jje91hGVtWWZf61p4ovPnR%2Fi389vBO0djE6YDo2W2q6x9QG8VWR5%2BhmVGUAgo8ir%2F1nR546i8hDkWMgA%2BwE0Z33fISOSmJtP8pPtZ6sozghezFhvlQvyRrx%2FV6zfStWBwZ9ctvtFcPGqjDGIGSOpCoqxsIHNnEYU2wTFurAv2aVqlAHJl85bw0F%2BzHLEbV%2BOpOXM%2FF0RybPrbKOoblqlw2V15gV5%2Fi2Js5TnFNncYw1X%2BiCZWVxf7sNTpvz9ZBuZlVRnh6WTAIRneIT9fH7zFOUaO6tM2lz%2F%2FoShyX04ZGRb9qY23ToQavJpod%2BNqy0SrOmLVOTZ2VkVXZ4S0abJvhZdGmp2JNDIx85j95IDUhNVip6d1KSfs%2BSXASc5imkuMn%2BGqZuaBYGriRs5%2BdRrOO42nkVOw%2BHIcCfmtyr4PF9RC0VqemlB3jLViB0G4VRJkaGE8yplVLMnOVWvO9eYotREOkMN73n8EGOqUBUobRyqJ9y5GTsW2LjMtfuXjMpH36bWKnmrBu39h6KFX07TUQTzCvAVBUFRpeEADL6sPJKtnnc0o7c%2FW4haD7kK6mf0YUGrQ6m44lETTdcLTMDUhDoNl8%2F%2Ffj2w2nle31aJB%2F0C5HRqOgi5FogEgYvLlYp2iBNclpb2x1GC72MFBYWVL%2FFsZ3eATbXRQab0hK1u4FmsG6vIA9ExQegJn7p01GPc1y&X-Amz-Signature=5c0aa248744fba3cb57ba55d145feffae50935bb2dba6a6899f6d39f904b01b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
