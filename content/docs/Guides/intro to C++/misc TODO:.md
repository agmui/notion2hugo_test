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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTO75ZJ4%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIF59rcgEdAPaon%2BFiaFmTF%2BIQCgN4z5Y37Xnn5gnd01MAiEA4cIpillCVg74crUOvq%2B7uM1vLDUJSmqEyqhLZzz1omQq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKE5Qn65njAFmJQ97yrcA%2BO0sK43JmZBrv9g23nYQu7ZWWb2NwonnbEEq%2BOR9j13%2F0mZ9Omw7NzAU%2F2xj9X9wHBkH3LSLhIgaTIDbpcECQ7U6%2FAY802E2N%2B9BWMQfUMwwrZfHWWXX53TFlYBZ8%2FT6pfL%2B9n0XKi1%2BOKIvnrzT2GV8c6ReZ9Nl4HdvrmPNGNTva1YCOPSgSL1zTgylavSqqMendKpG3TbX7BTRaLun9lVbMLm7GGrfr5eB7oU8q9VZIQ9rf4e7LQvkPI5vmd1hkqI6Zi94B%2F%2BaVnMjOkQNiqXhfYZRYgSXqmXYBkMay%2BRH%2B%2Ftjbc6ZEchXNTnlPZiO9fPsDB2dHx352KRthNpE3IB4swpOh3dlfJFTan2i%2FxBrfO5Wk0S%2B%2BRZWJURxy7hNfopWi9KL4KWWO%2FA9uIGjaGvqpyCZtC8qeeX9Sln6KKPUErT%2B5mf%2Bdbb1xBLV3wW%2BRW2MDc4%2F1Nlftxk5NXt3SJ1zzBVc%2FGnaJvrhmlOIS7TbuvOVa52PEU1HKVjrKsbLeAmAybbUiQdXT0wldAzv91zY24KnTwfM%2FeaAWVWQm66NJJU34cATnp7QvfSu2YhWsDvBlEytnoGZRIlFI87creS0p5O%2BaEVWL0XLl%2B1urwFAJPthi2%2BBNEn4DmYMICHgsIGOqUBw4RYJ%2BLl72y%2BMBYQ7rkeZqNeLNNL5zbEXnzQQFVV9nwGQti1G9JrJ1awxp4onmsKZSRWGIKKVRq4O1jyD5CfUIUDkG9V7rtgCuohYc6%2FWwzs%2BWXVBiNp11qrJac1%2B89x8U2v16LM4HXGS3Z3XQYri2LKlR7t5d3ocO3glJOxKcsYjK%2FriTF0gfdKYSrAjB8tTM8mO7Y%2BX9%2BPZu%2BON7iNiMS1egFA&X-Amz-Signature=d0ad2744db0a270fb2bf0667b16263937d912f726ed41573b1155a7121374a80&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTO75ZJ4%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIF59rcgEdAPaon%2BFiaFmTF%2BIQCgN4z5Y37Xnn5gnd01MAiEA4cIpillCVg74crUOvq%2B7uM1vLDUJSmqEyqhLZzz1omQq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKE5Qn65njAFmJQ97yrcA%2BO0sK43JmZBrv9g23nYQu7ZWWb2NwonnbEEq%2BOR9j13%2F0mZ9Omw7NzAU%2F2xj9X9wHBkH3LSLhIgaTIDbpcECQ7U6%2FAY802E2N%2B9BWMQfUMwwrZfHWWXX53TFlYBZ8%2FT6pfL%2B9n0XKi1%2BOKIvnrzT2GV8c6ReZ9Nl4HdvrmPNGNTva1YCOPSgSL1zTgylavSqqMendKpG3TbX7BTRaLun9lVbMLm7GGrfr5eB7oU8q9VZIQ9rf4e7LQvkPI5vmd1hkqI6Zi94B%2F%2BaVnMjOkQNiqXhfYZRYgSXqmXYBkMay%2BRH%2B%2Ftjbc6ZEchXNTnlPZiO9fPsDB2dHx352KRthNpE3IB4swpOh3dlfJFTan2i%2FxBrfO5Wk0S%2B%2BRZWJURxy7hNfopWi9KL4KWWO%2FA9uIGjaGvqpyCZtC8qeeX9Sln6KKPUErT%2B5mf%2Bdbb1xBLV3wW%2BRW2MDc4%2F1Nlftxk5NXt3SJ1zzBVc%2FGnaJvrhmlOIS7TbuvOVa52PEU1HKVjrKsbLeAmAybbUiQdXT0wldAzv91zY24KnTwfM%2FeaAWVWQm66NJJU34cATnp7QvfSu2YhWsDvBlEytnoGZRIlFI87creS0p5O%2BaEVWL0XLl%2B1urwFAJPthi2%2BBNEn4DmYMICHgsIGOqUBw4RYJ%2BLl72y%2BMBYQ7rkeZqNeLNNL5zbEXnzQQFVV9nwGQti1G9JrJ1awxp4onmsKZSRWGIKKVRq4O1jyD5CfUIUDkG9V7rtgCuohYc6%2FWwzs%2BWXVBiNp11qrJac1%2B89x8U2v16LM4HXGS3Z3XQYri2LKlR7t5d3ocO3glJOxKcsYjK%2FriTF0gfdKYSrAjB8tTM8mO7Y%2BX9%2BPZu%2BON7iNiMS1egFA&X-Amz-Signature=4f1c94a59b6e209d383408306de685f06afbb544d5c59e55d4fda3b2f2abada2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
